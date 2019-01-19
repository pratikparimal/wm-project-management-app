package com.cts.gbossApp.wmprojectmanagementsystem.dao;

import com.cts.gbossApp.wmprojectmanagementsystem.model.OpenRequirements;
import com.cts.gbossApp.wmprojectmanagementsystem.model.OpenRequirementsRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@Transactional
@Repository
public class OpenRequirementsDAO implements OpenRequirementsDAOInt {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Integer createNewRequirementData(OpenRequirements newRequirement) {
        String sql = "INSERT INTO openrequirements (soLineItemID, domainName, ownerName, winzoneId, winzoneOpportunity, opportunityIdentifiedDate, projectId, projectName, groupName, locationName, billStartDate, billEndDate, currStatus, profilesInEvaluation, skillset, rate, revenue, soCreatedDate, forecastType, filledInternally, requirementComment, closureComment )" +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
        Integer rowsAffected = jdbcTemplate.update(sql, newRequirement.getSoLineItemID(), newRequirement.getDomainName(), newRequirement.getOwnerName(),
                newRequirement.getWinzoneId(), newRequirement.getWinzoneOpportunity(), newRequirement.getOpportunityIdentifiedDate(),
                newRequirement.getProjectId(), newRequirement.getProjectName(), newRequirement.getGroupName(), newRequirement.getLocationName(),
                newRequirement.getBillStartDate(), newRequirement.getBillEndDate(), newRequirement.getCurrStatus(),
                newRequirement.getProfilesInEvaluation(), newRequirement.getSkillset(), newRequirement.getRate(),
                newRequirement.getRevenue(), newRequirement.getSoCreatedDate(), newRequirement.getForecastType(),
                newRequirement.getFilledInternally(), newRequirement.getRequirementComment(), newRequirement.getClosureComment());
        return rowsAffected;
    }

    @Override
    public Collection<OpenRequirements> getAllOpenRequirements() {
        String sql = "SELECT soLineItemID, domainName, ownerName, winzoneId, winzoneOpportunity, opportunityIdentifiedDate, projectId, projectName, groupName, locationName, billStartDate, billEndDate, currStatus, profilesInEvaluation, skillset, rate, revenue, soCreatedDate, forecastType, filledInternally, requirementComment, closureComment FROM openrequirements";
        RowMapper<OpenRequirements> rowMapper = new OpenRequirementsRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public void deleteOpenRequirementData(Integer soLineItemID) {
        String sql = "DELETE FROM openrequirements WHERE soLineItemID=?";
        jdbcTemplate.update(sql, soLineItemID);
    }
}

    /*
    public Collection<OpenRequirements> allRequirement = new ArrayList<>();

    public Collection<OpenRequirements> getAllOpenRequirements() {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");

        OpenRequirements req1, req2;

        req1 = new OpenRequirements(
                "Retail", 10000321, "WM_RET_PROJECT",
                "Pratik P", "WM-FIN", 1001, 9999,
                "Dheeraj", new Date(),
                "Java", "Onsite", new Date(),
                 new Date(), 10, 80, "Open",
                "Rahul", new Date(),
                "Needed for Techmod", "Confirmed - Billing Loss",
                "Yes", "Thank U");
        req2 = new OpenRequirements(
                "BFS", 10000320, "WM_TECHMOD_PROJECT",
                "Pranay P", "WM-FIN", 1002, 9999,
                "Dheeraj", new Date(),
                "Java", "Onsite", new Date(),
                new Date(), 10, 80, "Open",
                "Rahul", new Date(),
                "Needed for Techmod", "Confirmed - Billing Loss",
                "Yes", "Thank U");
//        if(allRequirement.size() == 0){
//            allRequirement.add(req1);
//            allRequirement.add(req2);
//        } else {
//
//
//            Iterator<OpenRequirements> iterator = allRequirement.iterator();
//            OpenRequirements req = null;
//            while (iterator.hasNext()) {
//                req = iterator.next();
//                if(!(req.equals(req1)) && (!(req.equals(req2))) )
//                if (!(req.getSoLineItemID() == req1.getSoLineItemID())){
//                    allRequirement.add(req1);
//                }
//                if (!(req.getSoLineItemID() == req2.getSoLineItemID())){
//                    allRequirement.add(req2);
//                }
//            }
//        }
        if(!allRequirement.contains(req1))
            allRequirement.add(req1);
        if(!allRequirement.contains(req2))
            allRequirement.add(req2);
        System.out.println(allRequirement);
        return allRequirement;
    }

    public OpenRequirements createNewRequirementData(OpenRequirements newRequirement) {
        allRequirement.add(newRequirement);
        System.out.println(newRequirement.toString());
        System.out.println(newRequirement.getDomainName() + ":::" + newRequirement.getProjectName());
        return newRequirement;
    }

    public void deleteOpenRequirementData(Integer soLineItemID) {
        Iterator<OpenRequirements> iterator = allRequirement.iterator();
        OpenRequirements req = null;
        while (iterator.hasNext()) {
            req = iterator.next();
            System.out.println("In DAO, delete , req = " + req.getSoLineItemID() + "req1 = " + soLineItemID);
            if (req.getSoLineItemID().equals(soLineItemID))
                System.out.println(req);
                System.out.println(allRequirement.remove(req));
        }
    }
    */

/*
String domainName,
Integer projectId,
String projectName,
String ownerName,
String groupName,
Integer soLineItemID,
Integer winzoneId,
String winzoneOpportunity,
Date opportunityIdentifiedDate,
String skillset,
String locationName,
Date billStartDate,
Date billEndDate,
Integer rate,
Integer revenue,
String currStatus,
String profilesInEvaluation,
Date soCreatedDate,
String requirementComment,
String forecastType,
String filledInternally,
String closureComment


[
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
              revenue: '$ 123456',
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
              revenue: '$ 123456',
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
              revenue: '$ 123456',
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
                revenue: '$ 123456',
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
                revenue: '$ 123456',
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
                revenue: '$ 123456',
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
                revenue: '$ 123456',
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
                revenue: '$ 123456',
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
                revenue: '$ 123456',
                soCreatedDate: '',
                profilesInEvaluation: '0',
                forecastType: 'Most Likely',
                filledInternally: 'Yes',
                requirementComment: 'Needy',
                closureComment: 'Thank U'
              }
          ]
 */
