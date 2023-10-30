///<reference types="Cypress"/>
import ScheduleEvent from "../POM/ScheduleEvent_po";

describe("Test for Create Event", () => {
  const scheduleevent = new ScheduleEvent();

  before(function () {
    cy.login();
  });

  beforeEach(function () {
    // Extract the CSRF token from the cookies and set it as a default header
      cy.getCookie('csrftoken').then((cookie) => {
      Cypress.Cookies.preserveOnce('sessionid', 'csrftoken');
      cy.wrap(cookie.value).as('csrfToken');
    });
  });

  it("should redirect to the User Dashboard", () => {
    scheduleevent.UserDashboard();
  });

  it("should redirect to the Event List page", () => {
    scheduleevent.EventsList();
  });

  it("should redirect to the Event Board", () => {
    scheduleevent.Go();
  });

  it("should redirect to the schedule List page", () => {
    scheduleevent.ScheduleList();
  });

  it("should able to create schedule for the event", () => {
    scheduleevent.ScheduleEvent();
  });
  
  it("should able to Edit the session", () => {
    scheduleevent.EditSession();
  });

  it("should able to Edit the schedule", () => {
    scheduleevent.EditSchedule();
  });

  it("should able to delete the schedule", () => {
    scheduleevent.deleteSchedule();
  });

});
