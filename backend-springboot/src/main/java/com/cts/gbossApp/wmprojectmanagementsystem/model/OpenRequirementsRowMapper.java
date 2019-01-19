package com.cts.gbossApp.wmprojectmanagementsystem.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OpenRequirementsRowMapper implements RowMapper<OpenRequirements> {

    @Override
    public OpenRequirements mapRow(ResultSet row, int rowNum) throws SQLException {
        OpenRequirements requirement = new OpenRequirements();

        requirement.setSoLineItemID(row.getInt("soLineItemID"));
        requirement.setDomainName(row.getString("domainName"));
        requirement.setProjectId(row.getInt("projectId"));
        requirement.setProjectName(row.getString("projectName"));
        requirement.setGroupName(row.getString("groupName"));
        requirement.setWinzoneId(row.getInt("winzoneId"));
        requirement.setWinzoneOpportunity(row.getString("winzoneOpportunity"));
        requirement.setOpportunityIdentifiedDate(row.getDate("opportunityIdentifiedDate"));
        requirement.setBillStartDate(row.getDate("billStartDate"));
        requirement.setBillEndDate(row.getDate("billEndDate"));
        requirement.setLocationName(row.getString("locationName"));
        requirement.setOwnerName(row.getString("ownerName"));
        requirement.setCurrStatus(row.getString("currStatus"));
        requirement.setProfilesInEvaluation(row.getString("profilesInEvaluation"));
        requirement.setRate(row.getInt("rate"));
        requirement.setRevenue(row.getInt("revenue"));
        requirement.setFilledInternally(row.getString("filledInternally"));
        requirement.setForecastType(row.getString("forecastType"));
        requirement.setSkillset(row.getString("skillset"));
        requirement.setSoCreatedDate(row.getDate("soCreatedDate"));
        requirement.setRequirementComment(row.getString("requirementComment"));
        requirement.setClosureComment(row.getString("closureComment"));
        return requirement;
    }
}
