import { OpenRequirementFormModel } from '../open-requirements/openRequirementClasses/openRequirementFormModel';

const OPEN_REQUIREMENT_DATA: OpenRequirementFormModel[] = [
    {
      soLineItemID : 1,
      ownerName : 'PP',
      domainName : 'Retail',
      groupName : 'WM-FIN',
      projectId : 10223,
      projectName : 'WM_RET_PROJECT',
      winzoneId : 123,
      winzoneOpportunity : 'Yes',
      locationName : 'Offshore',
      opportunityIdentifiedDate : null,
      billStartDate : null,
      currStatus : 'Open',
      pipelineCount : '0',
      forecastType : 'Most Likely',
      filledInternally : 'Yes',
      requirementComment : 'Needy',
      closureComment : 'Thank U'
    },
    {
        soLineItemID : 2,
        ownerName : 'DK',
        domainName : 'Retail',
        groupName : 'WM-AVM',
        projectId : 10224,
        projectName : 'WM_TEC_MOD_PROJECT',
        winzoneId : 456,
        winzoneOpportunity : 'Yes',
        locationName : 'Offshore',
        opportunityIdentifiedDate : null,
        billStartDate : null,
        currStatus : 'Open',
        pipelineCount : '0',
        forecastType : 'Most Likely',
        filledInternally : 'Yes',
        requirementComment : 'Needy',
        closureComment : 'Thank U'
      }
];
export default OPEN_REQUIREMENT_DATA;
