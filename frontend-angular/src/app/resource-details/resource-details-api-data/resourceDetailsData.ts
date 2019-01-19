import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ResourceDetails } from '../resource-upload/resourceUploadClasses/ResourceDetails';



export class ResourceDetailsData implements InMemoryDbService {

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
                experience : 7,
                role:"Associate",
                rate:10
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
                skillSet: "Java",
                experience : 7,
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
                skillSet: "Java",
                experience : 7,
                role:"Associate",
                rate:10
            }
        ];
        return { resources };
    }
}
