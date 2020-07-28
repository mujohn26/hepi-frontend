import React, { Component } from "react";
import "../../styles/service.css";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "../../styles/service";
import nurseIcon from "../../assets/images/nurse.png";
import patientIcon from "../../assets/images/patient.png";
import ambulanceIcon from "../../assets/images/ambulance.png";
import familyIcon from "../../assets/images/family.png";
import psychologistIcon from "../../assets/images/psychologist.png";
import advisoryIcon from "../../assets/images/advisor.png";
import orientationIcon from "../../assets/images/orientation.png";
class Service extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="service-page">
        <div>
          <Navbar />
        </div>
        <div className="service-page-title">Our services</div>
        <div class={classes.serviceContainer}>
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                A flight Nurse / Flight Health escort nurse / FHEN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Delivering nursing care to patients during emergency
                    transports.
                  </li>
                  <li>
                    Ensuring the safe transport of the patient to the
                    appropriate facility.
                  </li>
                  <li>
                    Maintaining thorough medical documentation of the patient
                    during relocation or transportation.
                  </li>
                  <li>
                    Maintaining psychomotor skills by participating in various
                    laboratory operations.
                  </li>
                  <li>
                    Maintaining proper documentation of the aviation and safety
                    training, clinical rotations and the advanced procedures.
                  </li>
                  <li>
                    Maintaining all equipments and supplies used by the
                    organization on a regular basis.
                  </li>
                  <li>
                    Participating in outreach marketing and educational
                    activities.
                  </li>
                  <li>
                    Assisting in the pre-mission liftoff checklist and assisting
                    the pilot, as directed by the health personnel.
                  </li>
                  <li>
                    Developing standards and guidelines related to the flight
                    programs. Participating in the quality improvement
                    activities.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Travel Health escort nurse / THEN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Traveling nurses move between patient homes, hospitals, clinics,
                medical facilities, tourism. Trip, conference. Sports meeting
                Churches, NGO , Company , tour ,travel , cycling , play ground
                and school. Etc Administering medication and initiating routine
                medical tests.
                <ul>
                  <li>
                    assists chronically-ill or homebound patients, helps medical
                    facilities with staffing shortages.
                  </li>
                  <li>
                    Administering medication and preparing
                    nutritionally-specific meals. teach family members and
                    caretakers about proper patient and medical care.
                  </li>
                  <li>
                    follow-up procedures after surgery or administering physical
                    therapy.
                  </li>
                  <li>
                    Caring for patients who cannot leave their homes, Administer
                    medical care and monitor patients' needs.
                  </li>
                  <li>Monitoring vital signs and needs plan</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Family, Community and home nurses /FCH&HEN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>• Promote healthy lifestyle</li>
                  <li> Prevent disease and health problems</li>
                  <li> Provide direct care</li>
                  <li>
                    {" "}
                    Educate community about managing chronic conditions and
                    making healthy choices
                  </li>
                  <li>
                    {" "}
                    Evaluate a community’s delivery of patient care and wellness
                    projects
                  </li>
                  <li> Institute health and wellness programs</li>
                  <li> Conduct research to improve healthcare</li>
                  <li> Recognizing interruptions of health development</li>
                  <li>
                    {" "}
                    Making decisions about seeking health care/ to take action
                  </li>
                  <li> Deal effectively health and non-health situations</li>
                  <li> Provide care to all members of the family</li>
                  <li>
                    {" "}
                    Maintain a home environment conducive to health maintenance
                  </li>
                  <li>
                    {" "}
                    distribute health-related items like condoms and pregnancy
                    tests. Examples of some health issues that community health
                    nurses try to control or eliminate are :Infectious and
                    sexually transmitted diseases , Obesity , Poor nutrition
                    ,Substance abuse Smoking ,Teen pregnancy
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Hotel nurse/ Hotel health escort Nurse / THEN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Provides emergency and first aid care for on the job
                    injuries and illness.
                  </li>
                  <li>Provides personal health care and advice.</li>
                  <li>
                    Provides personal assistance, medical attention, emotional
                    support, or other personal care to others such as coworkers,
                    customers, or clients.
                  </li>
                  <li>Conducts case management follow up.</li>
                  <li>Makes appropriate referrals to community resources.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Health Escort Nurse / HEN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li> assessing and planning patient needs requirement</li>
                  <li>
                    {" "}
                    Apply the patients /clients prescription by physician
                  </li>
                  <li> Ensure the patients sample sample are taken </li>
                  <li>
                    {" "}
                    Taking patients pulse , temperatures and blood pressure
                  </li>
                  <li>
                    {" "}
                    Providing emotional supports to patients and relatives{" "}
                  </li>
                  <li>
                    {" "}
                    Ensure patients right and patient safety well applied{" "}
                  </li>
                  <li>
                    {" "}
                    Accompanying patient home to health facility , and post
                    service until the the end of prescription , location to
                    another , meeting , conference even during tourism ,or any
                    trip accompanying by nurse for client initiative{" "}
                  </li>
                  <li>Advise and medical orientation </li>
                  <li>Call a help / assistance to high level </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Find a Psychologist/ psychotherapist and start your online
                therapy{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>Sample reasons for a therapy online </li>
                  <li>
                    {" "}
                    Personal issues ( stress ,anxiety ,depression ,self
                    confidence, etc{" "}
                  </li>
                  <li> Couples and family issues </li>
                  <li>Professionals issues </li>
                  <li> PTSD.</li>
                  <li>Difficult situation of life </li>
                  <li> Food related issues </li>
                  <li> Addiction </li>
                  <li> Violence and abuse </li>
                  <li> Physical health , etc </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Health escort and community Midwife / HE& CMDW
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>Focus on physical and emotional support </li>
                  <li>Favor less invasive birth practices </li>
                  <li>
                    {" "}
                    Increase access to prenatal care and lower rates of cesarean
                    births and obstetric intervention and babies with high birth
                    weight{" "}
                  </li>
                  <li> Provide Pre- post pregnancy health services </li>
                  <li>
                    {" "}
                    Provide health counseling and education for the women ,
                    family and community{" "}
                  </li>
                  <li>
                    {" "}
                    Reduce most maternal and newborn deaths due to poor health
                    system inadequate care before ,during and after delivery{" "}
                  </li>
                  <li>
                    Collaborating with existence of health facility, staff ,
                    administration in place according to the ministerial
                    guideline to participate in reducing child and maternal
                    death rate{" "}
                  </li>
                  <li>
                    {" "}
                    Accompanying pregnancy mother to the health facilities{" "}
                  </li>
                  <li>
                    {" "}
                    A post partum Follow up according prescription by authorized
                    physician{" "}
                  </li>
                  <li> Advocacy to the health care if necessary </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                NUTRISTIONIST HEAHLTH ESCORT / NHE
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    {" "}
                    Organize and implement nutrition policies and programs{" "}
                  </li>
                  <li>
                    Assess the dietary needs within their community and educate
                    them on the role that physical fitness and nutrition have in
                    achieving health{" "}
                  </li>
                  <li>
                    Educating individual and families on the principles of ideal
                    nutrition ,diet and food selection{" "}
                  </li>
                  <li>
                    Helping local organization by consulting and assisting with
                    the development of nutrition for specific population{" "}
                  </li>
                  <li> Designing proposal for funding </li>
                  <li> Evaluate foods service and make recommendation </li>
                  <li>
                    Ensure school , restaurants , hotels ,… lunch menus offer
                    adequate nutrition to ensure that the food provided meets
                    the needs{" "}
                  </li>
                  <li> Supply , distribute food supplements if necessary</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Mental nurse health escort / MNHE{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    They work in range of settings including peoples homes{" "}
                  </li>
                  <li>
                    {" "}
                    Support people with issues ranging from anxiety and
                    depression to personality and eating disorder or addiction
                    to drugs or alcohol{" "}
                  </li>
                  <li> Organizing workloads </li>
                  <li> Visiting patients at home </li>
                  <li>
                    Building relationship with reassuring listening and talking
                    to patients{" "}
                  </li>
                  <li>
                    {" "}
                    Combating stigma and helping patients and their families
                    deal with it{" "}
                  </li>
                  <li>Monitoring patients progress </li>
                  <li>
                    {" "}
                    Giving advice and arranging supports for patients relatives
                    and cares{" "}
                  </li>
                  <li>Assessing treatment success </li>
                  <li>
                    {" "}
                    Encouraging patient to take part in therapeutic activities
                    such as art and role play{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Lab technician health escort / LTHE{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    {" "}
                    Ensure the proper sample collection of patient / clients{" "}
                  </li>
                  <li>
                    {" "}
                    Ensure clients safety during and after sample collection and
                    analysis .
                  </li>
                  <li>
                    Provide health advice relative to the matter and results{" "}
                  </li>
                  <li>
                    {" "}
                    Simple basic testing eg TDR, Glycemia , pregnancy test{" "}
                  </li>
                  <li>
                    {" "}
                    Clear and full information on the results of patient
                    escorted or visited{" "}
                  </li>
                  <li>
                    {" "}
                    Consultancy , IEC and BSCC on health issues Based on the
                    results{" "}
                  </li>
                  <li> Prevent post infection </li>
                  <li>
                    Reduce NCDS and malaria case mortality rate in the community
                    and maternal neonate rate deaths{" "}
                  </li>
                  <li> Participate in home visit </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Public health escort / PH{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Observe health status to recognize and solve community
                    health issues{" "}
                  </li>
                  <li>
                    Encourage community , partnership and action to identify and
                    resolve health related issues{" "}
                  </li>
                  <li> Participate in community and home visit </li>
                  <li>
                    {" "}
                    Evaluate , Design or use monitoring tools like screening ,
                    lab records and vital information to recognize health risks
                    of people and community{" "}
                  </li>
                  <li>Direct or control prevention methods of clients </li>
                  <li>
                    {" "}
                    Recognize , individual , families group at threat for
                    specific preventable disease{" "}
                  </li>
                  <li>
                    {" "}
                    Educate or train medical team regarding precautionary
                    medicine problems{" "}
                  </li>
                  <li>
                    {" "}
                    Prepare precautionary health report which include problems
                    explanation to company only then administration shall
                    address the issue to the competent authority accordingly{" "}
                  </li>
                  <li>
                    {" "}
                    Home and family health issue identification and formulating
                    the recommendations{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Community and environmental health escort ( C&EHE){" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Ensure food protection , housing , institutional
                    environmental health , land use , community noise control ,
                    recreational swimming area and water , electromagnetic
                    radiation control solid , liquid and hazardous materials
                    managements , underground storage tank control , onsite
                    septic systems , vector control , drinking water quality ,
                    water sanitation , emergency preparedness and milk , all
                    requested by individual , group , company , industry …and
                    provide recommendations based on the results from control
                    and evaluation{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Affordable Counseling online/ ACO{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    {" "}
                    Private Professional counseling via online chat ,video or
                    phone call anytime anywhere, or by inviting our professional
                    expert in counseling , shall make a positive change in the
                    society , you deserve to be happy , start today , train your
                    mind to rejoice{" "}
                  </li>
                  <li>
                    It ‘s discreet online therapy allows you to enjoy the
                    privacy of your home while getting the help you deserve
                    confidentiality is our promise to you .
                  </li>
                  <li>
                    {" "}
                    The therapist are board licensed , and online counseling is
                    possible in even the most remote location{" "}
                  </li>
                  <li>
                    {" "}
                    Types of counseling offering for individual (myself ),couple
                    ( my serf and my partner and teenage counseling for my child
                    ),
                  </li>
                  <li>
                    {" "}
                    Our professional counseling deal with Sample reasons for a
                    therapy online , Personal issues ( stress ,anxiety
                    ,depression ,self confidence, etc , Couples and family
                    issues , Professionals issues ,PTSD. Difficult situation of
                    life ,Food related issues ,Addiction Violence and abuse
                    ,Physical health , etc{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Health advisory center program / HACP.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Using our HACP service you can call , chat or send your
                    question to Our Doctor / qualified health professional
                    expert will reply, will provide with the all the medical
                    information you need and will guide you as you choose a
                    course of action.{" "}
                  </li>
                  <li>
                    All from the comfort of your home or office . no more
                    sitting in the waiting room of hours just to get some basic
                    information from your Doctor .
                  </li>
                  <li>
                    {" "}
                    Ask the Doctor or Health professional expert gives you the
                    personalized health information you need to decide on the
                    right treatment for you and right hospital , clinic …to
                    attend for more deep health investigation and treatment
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box m={2} />
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Mperekeza program / MP
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  The goal of MP service is to promote , protect and preserve
                  the health of the public involve these basic concepts :
                  <li>
                    {" "}
                    Provide home palliative care , home visit ,and health follow
                    up according to the prescription from authorized health
                    facility ,or by or medical ordinance{" "}
                  </li>
                  <li>
                    {" "}
                    Manage and monitoring of NCDS in the community under
                    prescription or medical ordinance by physician licensed
                    working in health facility{" "}
                  </li>
                  <li>
                    {" "}
                    Educate people for screening NCDS and help them to get
                    medical prescription , use successfully by making sure if
                    are taken correctly and completely{" "}
                  </li>
                  <li>
                    Evaluate medical care success and side effects and take an
                    advice and appropriate action{" "}
                  </li>
                  <li>
                    Try to control or eliminate : infection and sexually
                    transmitted diseases , obesity , poor malnutrition ,
                    substance abuse, smocking and teen pregnancy{" "}
                  </li>
                  <li>Promote health lifestyle </li>
                  <li> Prevent disease and health problems </li>
                  <li>Provide home and family care </li>
                  <li>
                    {" "}
                    Educate community , families . groups , individual about
                    managing chronic conditions and making healthy choices{" "}
                  </li>
                  <li>
                    {" "}
                    Evaluate a community ‘ delivery of patient care and wellness
                    projects{" "}
                  </li>
                  <li>
                    Work by collaborating with country hospital , clinics ,
                    polyclinics , health center ,,in accordance of medical
                    ethics and confidentiality{" "}
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(Styles)(Service);
