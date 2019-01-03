import { InMemoryDbService } from 'angular-in-memory-web-api';

import { OpenRequirementFormModel } from '../openRequirementClasses/openRequirementFormModel';

export class OpenRequirementData implements InMemoryDbService {

  createDb() {
    const requirements: OpenRequirementFormModel[] = [
      {
        soLineItemID: 1001,
        ownerName: 'PP',
        domainName: 'Retail',
        groupName: 'WM-FIN',
        projectId: 102230001,
        projectName: 'WM_RET_PROJECT',
        winzoneId: 123,
        winzoneOpportunity: 'Yes',
        locationName: 'Offshore',
        opportunityIdentifiedDate: null,
        billStartDate: null,
        currStatus: 'Open',
        pipelineCount: '0',
        forecastType: 'Confirmed - Billing Loss',
        filledInternally: 'Yes',
        requirementComment: 'Needy',
        closureComment: 'Thank U'
      },
      {
        soLineItemID: 1002,
        ownerName: 'DK',
        domainName: 'Retail',
        groupName: 'WM-AVM',
        projectId: 102240003,
        projectName: 'WM_TEC_MOD_PROJECT',
        winzoneId: 456,
        winzoneOpportunity: 'Yes',
        locationName: 'Offshore',
        opportunityIdentifiedDate: null,
        billStartDate: null,
        currStatus: 'Open',
        pipelineCount: '0',
        forecastType: 'Most Likely',
        filledInternally: 'Yes',
        requirementComment: 'Needy',
        closureComment: 'Thank U'
      },
      {
        soLineItemID: 1003,
        ownerName: 'AK',
        domainName: 'BFS',
        groupName: 'WM-AVM',
        projectId: 102240002,
        projectName: 'WM_RPN_PROJECT',
        winzoneId: 789,
        winzoneOpportunity: 'Yes',
        locationName: 'Offshore',
        opportunityIdentifiedDate: null,
        billStartDate: null,
        currStatus: 'Open',
        pipelineCount: '0',
        forecastType: 'Most Likely',
        filledInternally: 'Yes',
        requirementComment: 'Needy',
        closureComment: 'Thank U'
      }
    ];
    return { requirements };
  }
}
