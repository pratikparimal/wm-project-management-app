import { InMemoryDbService } from 'angular-in-memory-web-api';


import { OpenRequirementFormModel } from 'src/app/open-requirements/openRequirementClasses/openRequirementFormModel';
import { ResourceDetails } from 'src/app/resource-details/resource-upload/resourceUploadClasses/ResourceDetails';



export class AllDataAPI implements InMemoryDbService {

    createDb() {
        const resources: ResourceDetails[] = [
            {
                cogId: 608003,
                name: "Richik",
                wmId: "vn88998",
                projectId: 1,
                projectName: "Management-App",
                fgWorkId: 123,
                fgContract: "contract",
                billability: "billable",
                location: "Onsite",
                pickerStart : null,
                pickerEnd: null,
                allocation : 39,
                skillSet: "Java",
                experience : 2,
                role: "Analyst",
                rate: 5
      },
            {
                cogId: 7,
                name: "raj",
                wmId: "ewfef",
                projectId: 2,
                projectName: "Crud App",
                fgWorkId: 123,
                fgContract: "contract",
                billability: "billable",
                location: "Onsite",
                pickerStart : null,
                pickerEnd: null,
                allocation : 66,
                skillSet: "Angular",
                experience : 3,
                role:"Associate",
                rate:10
            },
            {
                cogId: 8,
                name: "ram",
                wmId: "dcvsdv",
                projectId: 1,
                projectName: "Management-App",
                fgWorkId: 123,
                fgContract: "contract",
                billability: "billable",
                location: "Onsite",
                pickerStart : null,
                pickerEnd: null,
                allocation : 39,
                skillSet: "Full-Stack",
                experience : 7,
                role:"Senior Associate",
                rate:10
            }
        ];

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
              skillset: 'J2EE',
              billEndDate: '',
              rate: 100,
              revenue: 123456,
              soCreatedDate: '',
              profilesInEvaluation: '0',
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
              skillset: 'J2EE',
              billEndDate: '',
              rate: 100,
              revenue: 123456,
              soCreatedDate: '',
              profilesInEvaluation: '0',
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
              skillset: 'J2EE',
              billEndDate: '',
              rate: 100,
              revenue: 123456,
              soCreatedDate: '',
              profilesInEvaluation: '0',
              forecastType: 'Most Likely',
              filledInternally: 'Yes',
              requirementComment: 'Needy',
              closureComment: 'Thank U'
            },
            {
                soLineItemID: 1004,
                ownerName: 'AB',
                domainName: 'Insurance',
                groupName: 'WM-FIN',
                projectId: 102240001,
                projectName: 'WM_RET_PROJECT',
                winzoneId: 123,
                winzoneOpportunity: 'Yes',
                locationName: 'Offshore',
                opportunityIdentifiedDate: null,
                billStartDate: null,
                currStatus: 'Open',
                skillset: 'J2EE',
                billEndDate: '',
                rate: 100,
                revenue: 123456,
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Confirmed - Billing Loss',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              },
              {
                soLineItemID: 1005,
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
                skillset: 'J2EE',
                billEndDate: '',
                rate: 100,
                revenue: 123456,
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Most Likely',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              },
              {
                soLineItemID: 1006,
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
                skillset: 'J2EE',
                billEndDate: '',
                rate: 100,
                revenue: 123456,
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Most Likely',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              },
              {
                soLineItemID: 1007,
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
                skillset: 'J2EE',
                billEndDate: '',
                rate: 100,
                revenue: 123456,
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Confirmed - Billing Loss',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              },
              {
                soLineItemID: 1008,
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
                skillset: 'J2EE',
                billEndDate: '',
                rate: 100,
                revenue: 123456,
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Most Likely',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              },
              {
                soLineItemID: 1009,
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
                skillset: 'J2EE',
                billEndDate: '',
                rate: 100,
                revenue: 123456,
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Most Likely',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              }
          ];

        return { resources, requirements };
    }
}
