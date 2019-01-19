package com.cts.gbossApp.wmprojectmanagementsystem.model;

import java.util.Date;

public class OpenRequirements {
	
	private String domainName;
	
	private Integer projectId;
	
	private String projectName;

	private String ownerName;

	private String groupName;

	private Integer soLineItemID;

	private Integer winzoneId;

	private String winzoneOpportunity;

	private Date opportunityIdentifiedDate;

	private String skillset;

	private String locationName;

	private Date billStartDate;

	private Date billEndDate;

	private Integer rate;

	private Integer revenue;

	private String currStatus;

	private String profilesInEvaluation;

	private Date soCreatedDate;

	private String requirementComment;

	private String forecastType;

	private String filledInternally;

	private String closureComment;

	public OpenRequirements() {}

	public OpenRequirements(String domainName, Integer projectId, String projectName, String ownerName, String groupName, Integer soLineItemID, Integer winzoneId, String winzoneOpportunity, Date opportunityIdentifiedDate, String skillset, String locationName, Date billStartDate, Date billEndDate, Integer rate, Integer revenue, String currStatus, String profilesInEvaluation, Date soCreatedDate, String requirementComment, String forecastType, String filledInternally, String closureComment) {
		this.domainName = domainName;
		this.projectId = projectId;
		this.projectName = projectName;
		this.ownerName = ownerName;
		this.groupName = groupName;
		this.soLineItemID = soLineItemID;
		this.winzoneId = winzoneId;
		this.winzoneOpportunity = winzoneOpportunity;
		this.opportunityIdentifiedDate = opportunityIdentifiedDate;
		this.skillset = skillset;
		this.locationName = locationName;
		this.billStartDate = billStartDate;
		this.billEndDate = billEndDate;
		this.rate = rate;
		this.revenue = revenue;
		this.currStatus = currStatus;
		this.profilesInEvaluation = profilesInEvaluation;
		this.soCreatedDate = soCreatedDate;
		this.requirementComment = requirementComment;
		this.forecastType = forecastType;
		this.filledInternally = filledInternally;
		this.closureComment = closureComment;
	}

	public String getDomainName() {
		return domainName;
	}

	public void setDomainName(String domainName) {
		this.domainName = domainName;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public Integer getSoLineItemID() {
		return soLineItemID;
	}

	public void setSoLineItemID(Integer soLineItemID) {
		this.soLineItemID = soLineItemID;
	}

	public Integer getWinzoneId() {
		return winzoneId;
	}

	public void setWinzoneId(Integer winzoneId) {
		this.winzoneId = winzoneId;
	}

	public String getWinzoneOpportunity() {
		return winzoneOpportunity;
	}

	public void setWinzoneOpportunity(String winzoneOpportunity) {
		this.winzoneOpportunity = winzoneOpportunity;
	}

	public Date getOpportunityIdentifiedDate() {
		return opportunityIdentifiedDate;
	}

	public void setOpportunityIdentifiedDate(Date opportunityIdentifiedDate) {
		this.opportunityIdentifiedDate = opportunityIdentifiedDate;
	}

	public String getSkillset() {
		return skillset;
	}

	public void setSkillset(String skillset) {
		this.skillset = skillset;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public Date getBillStartDate() {
		return billStartDate;
	}

	public void setBillStartDate(Date billStartDate) {
		this.billStartDate = billStartDate;
	}

	public Date getBillEndDate() {
		return billEndDate;
	}

	public void setBillEndDate(Date billEndDate) {
		this.billEndDate = billEndDate;
	}

	public Integer getRate() {
		return rate;
	}

	public void setRate(Integer rate) {
		this.rate = rate;
	}

	public Integer getRevenue() {
		return revenue;
	}

	public void setRevenue(Integer revenue) {
		this.revenue = revenue;
	}

	public String getCurrStatus() {
		return currStatus;
	}

	public void setCurrStatus(String currStatus) {
		this.currStatus = currStatus;
	}

	public String getProfilesInEvaluation() {
		return profilesInEvaluation;
	}

	public void setProfilesInEvaluation(String profilesInEvaluation) {
		this.profilesInEvaluation = profilesInEvaluation;
	}

	public Date getSoCreatedDate() {
		return soCreatedDate;
	}

	public void setSoCreatedDate(Date soCreatedDate) {
		this.soCreatedDate = soCreatedDate;
	}

	public String getRequirementComment() {
		return requirementComment;
	}

	public void setRequirementComment(String requirementComment) {
		this.requirementComment = requirementComment;
	}

	public String getForecastType() {
		return forecastType;
	}

	public void setForecastType(String forecastType) {
		this.forecastType = forecastType;
	}

	public String getFilledInternally() {
		return filledInternally;
	}

	public void setFilledInternally(String filledInternally) {
		this.filledInternally = filledInternally;
	}

	public String getClosureComment() {
		return closureComment;
	}

	public void setClosureComment(String closureComment) {
		this.closureComment = closureComment;
	}

	@Override
	public String toString() {
		return "OpenRequirements{" +
				"domainName='" + domainName + '\'' +
				", projectId=" + projectId +
				", projectName='" + projectName + '\'' +
				", ownerName='" + ownerName + '\'' +
				", groupName='" + groupName + '\'' +
				", soLineItemID=" + soLineItemID +
				", winzoneId=" + winzoneId +
				", winzoneOpportunity='" + winzoneOpportunity + '\'' +
				", opportunityIdentifiedDate=" + opportunityIdentifiedDate +
				", skillset='" + skillset + '\'' +
				", locationName='" + locationName + '\'' +
				", billStartDate=" + billStartDate +
				", billEndDate=" + billEndDate +
				", rate=" + rate +
				", revenue=" + revenue +
				", currStatus='" + currStatus + '\'' +
				", profilesInEvaluation='" + profilesInEvaluation + '\'' +
				", soCreatedDate=" + soCreatedDate +
				", requirementComment='" + requirementComment + '\'' +
				", forecastType='" + forecastType + '\'' +
				", filledInternally='" + filledInternally + '\'' +
				", closureComment='" + closureComment + '\'' +
				'}';
	}
}
