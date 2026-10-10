// English translations. Same facts as the Russian content, nothing added.
// Fields that are TODO in Russian stay TODO here (see getContent: they fall back to 'TODO').

import type { CaseStudy, CaseStudyCategory } from './case-studies';

export const profileEn = {
  tagline:
    'Technical Project / Program Manager',
  summary:
    'Technical project manager with experience in integrations and API development. I lead cross-functional teams (including external ones) at every stage: from decomposing business tasks to launching solutions in production. I understand system architecture and how services interact, and I work at the intersection of business and development. I work with complex integrations and legacy systems and help get tasks to delivery faster.',
  location: 'Rostov-on-Don, Russia',
};

export const keySkillsEn = [
  'I rebuild an understanding of complex, poorly documented systems.',
  'I connect business, development and external teams.',
  'I take on product and analytical tasks when there is no dedicated role.',
  'I take changes through to launch, including regulatory requirements.',
  'I organise work during critical failures and keep stakeholders informed.',
];

export const enjoySolvingEn = [
  'Stitching heterogeneous systems — APIs, EDI, external vendors — into one working process.',
  'Working incidents while they are hot: assembling the right people and keeping stakeholders informed.',
  'Reconstructing a system map from code and traffic when there is no documentation, and digging to the real cause.',
  'Turning regulatory requirements into clear tasks and hitting deadlines set by legislation, not by the backlog.',
  'Keeping several teams and projects in one context at once.',
  'Gathering requirements and launching changes when part of the information is simply unavailable.',
];

export const categoriesEn: Record<CaseStudyCategory, { label: string; description: string }> = {
  integrations: {
    label: 'Technical integrations',
    description: 'External systems, government registries, EDI operators and legacy APIs.',
  },
  investigations: {
    label: 'Investigations & incidents',
    description: 'Diagnosis without documentation and coordination in the moment of failure.',
  },
  product: {
    label: 'Product & automation',
    description: 'From idea and requirements to a working feature.',
  },
  process: {
    label: 'Process management',
    description: 'Releases and coordinating several teams and projects in parallel.',
  },
};

type CaseEn = Partial<Omit<CaseStudy, 'slug' | 'category' | 'draft'>>;

export const caseStudiesEn: Record<string, CaseEn> = {
  'port-transit-incident': {
    title: 'Coordinating a critical incident at the terminal',
    oneLiner:
      'The terminal could not accept vehicles because of a timeslot-deletion failure — I pulled the right people together and organised the fix.',
    context:
      'The terminal could not accept vehicles due to a problem with deleting timeslots. A manager from another project asked for help.',
    problem:
      "The failure blocked vehicle intake at the terminal — not a side process, but the site's core operation.",
    whyHard:
      'The right people from different teams had to be assembled quickly and a plan built in real time, without a ready-made runbook for this particular case.',
    role: 'Joined the investigation of the critical failure.',
    decisions:
      'Brought managers, developers and leadership together; built an action plan and order of steps together with my manager; then coordinated execution and communication between participants, keeping stakeholders informed on progress.',
    outcome:
      "Organised a controlled resolution of the incident while the terminal's operation was blocked.",
    draftNote: 'Story and role are there; missing the downtime duration and what exactly was fixed.',
  },
  'fgis-zerno': {
    title: 'FGIS "Zerno" integration',
    draftNote: 'This topic is not in the source material at all — to be recalled from scratch.',
  },
  'etrn-launch': {
    title: 'Launching ETrN-based vehicle intake at the "Podskok" terminal',
    oneLiner:
      'With no dedicated product manager, got the terminal ready for the mandatory switch to electronic transport waybills (ETrN) on 1 September.',
    context:
      'There was no dedicated product manager on the project; without ETrN support the terminal would not have been able to accept vehicles after the legal transition on 1 September.',
    problem:
      'ETrN-based intake had to be built before a hard regulatory deadline — otherwise the terminal would lose the ability to accept transport.',
    whyHard:
      'A hard legal deadline with no option to postpone, plus no dedicated product role — requirements gathering, prioritisation and alignment all fell to me.',
    role: 'Gathered requirements and worked out the ETrN business process; aligned the solution between business and development.',
    decisions:
      'Coordinated implementation of ETrN vehicle intake and tracked readiness against the mandatory deadline.',
    outcome:
      'Got the terminal ready for the regulatory change and kept its ability to accept transport.',
    draftNote: 'Story and outcome are confirmed; missing scale (how many vehicles/partners) and exact dates.',
  },
  'etrn-edo-scenarios': {
    title: 'ETrN scenarios and roaming between EDI operators',
    oneLiner: 'Analysed complex electronic transport waybill scenarios and how EDI operators interact.',
    context:
      'Needed to understand complex scenarios of electronic transport waybills and the interaction of electronic document exchange (EDI) operators.',
    problem:
      'Waybills sometimes failed to link correctly, pointing to problem scenarios at the junction of different EDI operators.',
    whyHard:
      'The problem sat on the border of several external systems (ETrN, EPL, SDIZ) and different EDI operators with roaming between them — an area where no single party sees the full picture.',
    role: 'Studied the business processes of ETrN, EPL and SDIZ, analysed roaming between EDI operators and searched for the causes of unlinked waybills.',
    decisions:
      'Drafted improvement proposals and translated regulatory requirements into clear tasks for the team.',
    technologies: ['ETrN', 'EPL', 'SDIZ', 'EDI'],
    outcome:
      'Laid the groundwork for correct document processing and for releases driven by legislative changes.',
    draftNote:
      'Marked in the source as an addition from earlier discussions — check against specific tasks before publishing.',
  },
  astral: {
    title: 'Astral integration',
    oneLiner: 'Spotted a licensing risk of a new technology in advance, before it became a problem.',
    problem: 'A risk related to the licence of a new technology was identified in advance.',
    draftNote:
      'Only one lead line: which technology, how the risk was found, how the problem was prevented — to be recalled in full.',
  },
  glonass: {
    title: 'GLONASS integration against fraud',
    oneLiner: 'Organised a GLONASS integration to counter fraud, as the business required.',
    context: 'The business needed a way to counter fraud.',
    role: 'Organised the GLONASS integration.',
    technologies: ['GLONASS'],
    draftNote: 'Goal and fact of integration are there; missing technical solution, participants and effect.',
  },
  'soap-integrations': {
    title: 'SOAP integrations',
    draftNote: 'Not in the source material — recall where exactly SOAP was used.',
  },
  'certificate-automation': {
    title: 'Automating certificate expiry control',
    oneLiner: 'Automated monitoring of certificate expiry: data collection, notifications, calendar reminders.',
    context: 'Certificate expiry dates had to be tracked without constant manual checking.',
    problem: 'Manual tracking risked missing the renewal of a critical certificate.',
    role: 'Automated certificate data collection; took part in deploying and maintaining the service.',
    decisions:
      'Set up notifications and calendar reminders for expiry; connected the form, service and calendar and configured event creation.',
    outcome: 'Reduced manual control effort and the risk of missing a critical certificate renewal.',
    draftNote:
      'Actions confirmed; no numbers (how many certificates, how often they were missed before) and no exact stack.',
  },
  'payment-automation': {
    title: 'Automating payment processing',
    oneLiner: 'Automated payment processing between systems, cutting manual operations.',
    context: 'Payment intake involved manual operations and a risk of data-processing errors.',
    problem: 'Manual payment processing between systems carried a risk of errors.',
    role: 'Analysed the payment intake process.',
    decisions: 'Organised automation of data processing between systems.',
    outcome: 'Reduced the number of manual operations and the likelihood of errors.',
    draftNote: 'Confirmed, but without quantitative metrics or system names.',
  },
  'release-management': {
    title: 'Release planning across multiple projects',
    oneLiner: 'Planned releases and kept business and the technical team in sync during legislative changes.',
    context: 'Ran several projects in parallel.',
    whyHard:
      'Legislative changes set hard release deadlines that had to be aligned with the normal course of development.',
    role: 'Planned releases and tracked deadlines.',
    decisions: 'Synchronised business and the technical team during legislative changes.',
    draftNote:
      'Still a generalisation rather than a concrete story — add scale: how many projects, releases, teams.',
  },
  'multi-team-management': {
    title: 'Coordinating development, testing, design and DevOps at once',
    oneLiner: 'Coordinated several functions in parallel across several projects.',
    context: 'Ran several projects in parallel.',
    whyHard:
      'Several functions — development, testing, design, DevOps — had to be held in one context across several projects at once.',
    role: 'Coordinated development, testing, design and DevOps.',
    draftNote:
      'Based on the same source paragraph as "Release planning" — worth merging these two back once details appear.',
  },
  'carrier-product-ownership': {
    title: 'Product direction for carriers',
    oneLiner: 'Took over the product direction: promo landing page, subscriptions, metrics, North Star Metric.',
    context: 'The project needed someone to take on part of the product work for carriers.',
    whyHard:
      'Had to take on the whole product role — from a landing page to a metrics system — without a formal move into that role.',
    role: 'Picked up the direction as a product manager.',
    decisions:
      'Launched a promo landing page, removed the subscription-tracking logic for carriers, added product metrics and defined the North Star Metric.',
    outcome: 'Shaped and delivered a set of product changes and a system for measuring their impact.',
    draftNote: 'Need metric names and the effect — already flagged in the source as an open question.',
  },
  'kontur-integration': {
    title: 'Recovering and launching the Kontur integration',
    oneLiner: 'Recovered a lost Kontur integration and brought it to working waybill exchange via API.',
    context:
      'The company had lost the full understanding of the old Kontur integration; receiving transport waybills via API had to be set up.',
    problem:
      'Nobody understood how the existing integration worked, and a check revealed it had been registered to the wrong legal entity.',
    whyHard:
      "The problem was not only technical: someone else's legacy integration had to be untangled and a legal issue resolved — contracts and registration of the correct legal entity — before the API could work at all.",
    role: 'Recovered the logic of the old integration and verified the access keys.',
    decisions:
      'Initiated contracts and registration of the correct legal entity, got the company added as a partner in Kontur, and agreed with another terminal on ETrN filling rules so that the terminal would receive waybills as an observer.',
    technologies: ['Kontur API', 'ETrN'],
    outcome: 'Launched receiving transport waybills via the Kontur API for one of the projects.',
    draftNote: 'A strong, complete story — missing the timeline and scale (how many waybills/partners).',
  },
  'production-investigation': {
    title: 'Technical investigation of anomalous changes in production',
    oneLiner: 'Found an undocumented service that changed production data bypassing the main business logic.',
    context:
      'Records with a source unknown to the team kept appearing in the production database; there was no documentation or complete map of the system.',
    problem:
      'Had to find where the anomalous data changes came from with neither documentation nor a map of how the services connect.',
    whyHard:
      'The investigation crossed several technology layers at once — PHP on Yii1 and Yii2, C#, Angular — plus network traffic, server configuration and JWT tokens; the system had to be reconstructed piece by piece, not read from documentation that did not exist.',
    role: 'Reconstructed how several services interact and what role each plays in the overall system; investigated code and traffic.',
    decisions: 'Worked in a loop of hypothesis → check → new data → next hypothesis.',
    outcome:
      'Found an internal undocumented service that changed production data directly, bypassing the main business logic, and identified a functional defect: data was deleted instead of being transferred correctly. Prepared conclusions for assessing technical debt.',
    draftNote:
      'The source notes that the file with investigation details is unavailable — verify system names and the final effect. Likely linked to the separately mentioned "delete_who investigation" — confirm and merge if it is the same case.',
  },
  'telegram-bot-waybills': {
    title: 'Designing a Telegram bot for waybills',
    oneLiner: 'Designed access to transport waybills via a Telegram bot: authorisation, documents, QR codes.',
    context: 'Scenarios for accessing waybills through a Telegram bot had to be worked out.',
    role: "Took part in designing the bot's integration with the system.",
    decisions:
      'Worked out phone-number authorisation, requirements for retrieving and displaying waybills, and issuing document QR codes.',
    technologies: ['Telegram Bot API', 'QR codes'],
    outcome: 'Prepared scenarios and requirements for integrating a user channel with the waybill system.',
    draftNote: 'Addition from another discussion — launch result (did the bot reach production) is not confirmed.',
  },
};
