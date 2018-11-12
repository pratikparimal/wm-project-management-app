import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { Owner } from './openRequirementClasses/owner';
import { Domain } from './openRequirementClasses/domain';
import { DOMAINS } from './openRequirementJSONData/mock-domain';
import { Project } from './openRequirementClasses/project';
import { PROJECTS } from './openRequirementJSONData/mock-project';
import { Group } from './openRequirementClasses/group';
import { GROUPS } from './openRequirementJSONData/mock-group';
import { Skillset } from './openRequirementClasses/skillset';
import { SKILLSETS } from './openRequirementJSONData/mock-skillset';
import { Location } from './openRequirementClasses/location';
import { LOCATIONS } from './openRequirementJSONData/mock-location';
import { BillingStartDate } from './openRequirementClasses/billingStartDate';
import { CurrentStatus } from './openRequirementClasses/currentStatus';
import { Winzone } from './openRequirementClasses/winzone';
import { SOLineItem } from './openRequirementClasses/soLineItem';
import { Pipeline } from './openRequirementClasses/pipeline';
import { FORECASTS } from './openRequirementJSONData/mock-forecast';
import { Forecast } from './openRequirementClasses/forecast';
import { FilledInternally } from './openRequirementClasses/filledInternally';
import { OpportunityDate } from './openRequirementClasses/opportunityDate';
import { RequirementDetails } from './openRequirementClasses/requirementDetails';
import { ClosureComment } from './openRequirementClasses/closureComment';

@Component({
  selector: 'app-open-requirements',
  templateUrl: './open-requirements.component.html',
  styleUrls: ['./open-requirements.component.css']
})
export class OpenRequirementsComponent implements OnInit {

  @Output()
  selectionChange: EventEmitter<any>;

  owner: Owner = new Owner();

  domains = DOMAINS;
  selectedDomain: Domain = new Domain();

  projects = PROJECTS;
  selectedProject: Project = new Project();

  groups = GROUPS;
  selectedGroup: Group = new Group();

  skillsets = SKILLSETS;
  skillset: Skillset = new Skillset();

  locations = LOCATIONS;
  location: Location = new Location();

  billingDate: BillingStartDate = new BillingStartDate();

  currentStatus: CurrentStatus = new CurrentStatus();

  winzone: Winzone = new Winzone();

  opprotunityIDate: OpportunityDate = new OpportunityDate();

  solineitem: SOLineItem = new SOLineItem();

  pipeline: Pipeline = new Pipeline();

  requirementDetail: RequirementDetails = new RequirementDetails();

  forecasts = FORECASTS;
  forecast: Forecast = new Forecast();

  filledInternal: FilledInternally = new FilledInternally();

  closureComments: ClosureComment = new ClosureComment();

  constructor() {}

  ngOnInit() {}

  onDomainChange(domain: Domain): void {
    this.selectedDomain = domain;
  }

  onProjectChange(project: Project): void {
    this.selectedProject = project;
  }

  onGroupChange(group: Group): void {
    this.selectedGroup = group;
  }

  onForecastChange(fc: Forecast): void {
    this.forecast = fc;
  }

  onOpenRequirementFormSubmit(openRequirementForm: NgForm) {
    if (openRequirementForm.valid) {
      console.log(openRequirementForm.value);
      console.log(this.selectedDomain.domainName);
    }
  }

  // openRequirementForm = new FormGroup({
  //   domainElement: new FormControl(''),
  //   ownerElement: new FormControl(''),
  //   projectElement: new FormControl(''),
  // });

  // openRequirementForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit() {
    // this.openRequirementForm = this.formBuilder.group({
    //   "domainElement":[this.selectedDomain.domainName, [Validators.required]],
    //   "ownerElement":[this.owner.ownerName, [Validators.required]],
    //   "projectElement":[this.selectedProject.projectName, [Validators.required]],
    //   "groupElement":[this.selectedGroup.groupName, [Validators.required]],
    //   "locationElement":[this.location.locationName, [Validators.required]],
    //   "billStartDateElement":[this.location.locationName, [Validators.required]]
    // });
 // }

}
