export default class SignalDetailsController {
  /*@ngInject*/ constructor(signalsDetailService, $stateParams, $filter, appConf) {
    this.name = 'signalDetails';

    const addDays2Date = (date, days) => {
      var d = new Date(date);
      return new Date(d.setDate(d.getDate() + days));

    };

    const countProperties = (obj) => {
      var count = 0;
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          ++count;
        }
      }
      return count;
    };

    if($stateParams.signalId) {
      signalsDetailService.getById($stateParams.signalId).then((data) => {
        this.data = data;

        this.setActionPlanDueDate = () => {

          if (this.data.actionPlan.actionPlanDueDate != '' && this.data.actionPlan.actionPlanDueDate != null) {
            return this.data.actionPlan.actionPlanDueDate;
          } else {
            var currentDate = angular.copy(this.actionPlanMinDate);
            var validationPlusProposed = addDays2Date(this.data.signalValidationDate, this.data.signalProperties.proposedDaysForActionPlan);

            if (validationPlusProposed <= currentDate) {
              validationPlusProposed = addDays2Date(currentDate, this.data.signalProperties.proposedDaysForActionPlan);
            }

            if (validationPlusProposed < this.actionPlanMaxDate) {
              return validationPlusProposed;
            } else {
              return this.actionPlanMaxDate;
            }
          }
        };
        var hideSpecificData = ["T008"];

        this.displaySpecificData = (type) => {
          return hideSpecificData.indexOf(type.code) === -1;
        };

        this.changeAPTitle = () => {
          this.clientAPCollapsed = !this.clientAPCollapsed;
          this.clientAPPanelTitle = this.clientAPCollapsed ? 'Zobrazit akční plán na klientovi' : 'Skrýt akční plán na klientovi';
        };

        this.title = 'Detail signálu';
        this.clientAPCollapsed = true;
        this.clientAPPanelTitle = this.clientAPCollapsed ? 'Zobrazit akční plán na klientovi' : 'Skrýt akční plán na klientovi';

        this.datepickerMode = 'edit';
        this.noteMinLength = appConf.MIN_CLIENT_NOTE_LENGTH;
        this.noteMaxLength = appConf.MAX_CLIENT_NOTE_LENGTH;
        this.actionPlanMaxLength = appConf.MAX_ACTION_PLAN_LENGTH;
        this.displayControlPanel = false;
        this.displayNote = false;
        this.actionPlanMode = data.signalStatus.code === 'CLASSIFIED' ? 'read' : '';
        this.signalClassificationEditable = false;
        if (this.data.taskBar) {
          //show/hide control panel
          this.displayControlPanel = countProperties(data.taskBar._links) > 0;

          if (this.data.taskBar.task) {
            //Set page title
            if (this.data.taskBar.task.taskTakenOver) {
              this.title = 'Detail úkolu';
              this.title += ' - ';
              this.title += this.data.taskBar.task.taskType.displayValue;
              if (this.data.taskBar.task.taskDueDate !== null) {
                this.title += ' (';
                this.title += $filter('ewsDate')(this.data.taskBar.task.taskDueDate);
                this.title += ')';
              }
            }

            this.actionPlanMode = this.displayControlPanel && this.data.taskBar.task.taskTakenOver
            && (this.data.taskBar.task.taskType.code === 'CMT_Classify' || this.data.taskBar.task.taskType.code === 'CMT_Evaluate')
              ? 'edit' : this.actionPlanMode;
            this.signalClassificationEditable = this.displayControlPanel && this.data.taskBar.task.taskTakenOver
              && ('CMT_Classify' === this.data.taskBar.task.taskType.code || 'CMT_Evaluate' === this.data.taskBar.task.taskType.code);
          }

          this.actionPlanMinDate = new Date();
          this.actionPlanMaxDate = addDays2Date(this.data.signalValidationDate, this.data.signalProperties.maxDaysForActionPlan);
          var actionPlanDueDate = this.setActionPlanDueDate();
          this.updateResource = {
            signalId: this.data.signalId,
            note: '',
            username: '',
            //riskClassification = confirmed or original (the server decides it)
            riskClassification: this.data.classification.riskClassification.code,
            actionPlan: this.data.actionPlan.actionPlan,
            actionPlanDueDate: actionPlanDueDate,
            actionPlanResolverRole: this.data.actionPlan.actionPlanResolverRole ?
              this.data.actionPlan.actionPlanResolverRole.code : this.data.signalProperties.actionPlanDefaultResolverRole
          };

          this.delegateResource = {
            note: ''
          };

          // TODO remove watch
          // this.$watch(this.updateResource.note, (newVal) => {
          //   ctrl.delegateResource.note = newVal;
          // }, true);

          //show/hide add note section
          var dispNote4Task = ['AddNote', 'Assess', 'Validate', 'Invalidate', 'RequestAssesment', 'RequestComment',
            'Agree', 'Disagree', 'Comment', 'Classify', 'Return', 'CloseOK', 'CloseNOK', 'Modify'];
          for (var i = 0; i < dispNote4Task.length; i++) {
            if (this.data.taskBar._links['task' + dispNote4Task[i]]) {
              this.displayNote = true;
              i = dispNote4Task.length;
            }
          }
        }

        this.invalidDueDate = () => {
          if (this.updateResource.actionPlanDueDate == '' || this.updateResource.actionPlanDueDate == null) return true;
          return new Date() <= new Date(this.updateResource.actionPlanDueDate);
        };


        this.isOpenSignalsOpened = [];
        if (this.data.client.clientOpenedSignals.items.length > 0) {
          this.isOpenSignalsOpened.push(0);
        }
      });
    }
  }
}

