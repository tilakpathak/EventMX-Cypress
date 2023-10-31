class SurveyForm {
    UserDashboard() {
        cy.get("#navbar").contains('Dashboard').click()
        cy.wait(2000)
        cy.url().should('include', '/backend');
        return this;
    }

    EventsList() {
        cy.get(".small-box-footer").click()
        cy.get("h3").contains('Events List')
        cy.wait(2000)
        cy.url().should('include', '/events');
        return this;
    }
   
    performDragAndDrop() {
      cy.get("tr:nth-of-type(2) > td:nth-of-type(9) > .btn-wrap > .btnz.btnz-outline-primary.btnz-xs").click();
    
      // Drag Email
      cy.get(".input-control.input-control-14.ui-sortable-handle > span").trigger('mousedown', { which: 1 });
      cy.get(".form-builder.form-wrap.formbuilder-embedded-bootstrap > .frmb.pull-left.stage-wrap.ui-sortable")
        .trigger('mousemove')
        .trigger('mouseup', { force: true });
    
      // Drag Text 
      cy.get(".formbuilder-icon-text.input-control.input-control-9.ui-sortable-handle > span").trigger('mousedown', { which: 1 });
      cy.get(".form-builder.form-wrap.formbuilder-embedded-bootstrap > .frmb.pull-left.stage-wrap.ui-sortable")
        .trigger('mousemove')
        .trigger('mouseup', { force: true });
    
      // Drag Radio button
      cy.get(".formbuilder-icon-radio-group.input-control.input-control-15.ui-sortable-handle > span").trigger('mousedown', { which: 1 });
      cy.get(".form-builder.form-wrap.formbuilder-embedded-bootstrap > .frmb.pull-left.stage-wrap.ui-sortable")
        .trigger('mousemove')
        .trigger('mouseup', { force: true });
    
      return this;
    }

}
export default SurveyForm;