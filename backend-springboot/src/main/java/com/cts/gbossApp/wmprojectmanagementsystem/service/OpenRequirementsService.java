package com.cts.gbossApp.wmprojectmanagementsystem.service;

import com.cts.gbossApp.wmprojectmanagementsystem.dao.OpenRequirementsDAO;
import com.cts.gbossApp.wmprojectmanagementsystem.model.OpenRequirements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class OpenRequirementsService implements OpenRequirementsServiceInt {

    @Autowired
    OpenRequirementsDAO openReqDAO;

    @Override
    public Integer createNewRequirementData(OpenRequirements openReqFormData) {

        OpenRequirements newRequirement = new OpenRequirements();

        newRequirement.setSoLineItemID(openReqFormData.getSoLineItemID());
        newRequirement.setDomainName(openReqFormData.getDomainName());
        newRequirement.setProjectId(openReqFormData.getProjectId());
        newRequirement.setProjectName(openReqFormData.getProjectName());
        newRequirement.setGroupName(openReqFormData.getGroupName());
        newRequirement.setWinzoneId(openReqFormData.getWinzoneId());
        newRequirement.setWinzoneOpportunity(openReqFormData.getWinzoneOpportunity());
        newRequirement.setOpportunityIdentifiedDate(openReqFormData.getOpportunityIdentifiedDate());
        newRequirement.setBillStartDate(openReqFormData.getBillStartDate());
        newRequirement.setBillEndDate(openReqFormData.getBillEndDate());
        newRequirement.setLocationName(openReqFormData.getLocationName());
        newRequirement.setOwnerName(openReqFormData.getOwnerName());
        newRequirement.setCurrStatus(openReqFormData.getCurrStatus());
        newRequirement.setProfilesInEvaluation(openReqFormData.getProfilesInEvaluation());
        newRequirement.setRate(openReqFormData.getRate());
        newRequirement.setRevenue(openReqFormData.getRevenue());
        newRequirement.setFilledInternally(openReqFormData.getFilledInternally());
        newRequirement.setForecastType(openReqFormData.getForecastType());
        newRequirement.setSkillset(openReqFormData.getSkillset());
        newRequirement.setSoCreatedDate(openReqFormData.getSoCreatedDate());
        newRequirement.setRequirementComment(openReqFormData.getRequirementComment());
        newRequirement.setClosureComment(openReqFormData.getClosureComment());

        return openReqDAO.createNewRequirementData(newRequirement);
    }

    @Override
    public Collection<OpenRequirements> getAllOpenRequirements() {
        Collection<OpenRequirements> requirements;
        requirements = openReqDAO.getAllOpenRequirements();
        return requirements;
    }

    @Override
    public void deleteOpenRequirementData(Integer soLineItemID) {
        openReqDAO.deleteOpenRequirementData(soLineItemID);
    }
}
