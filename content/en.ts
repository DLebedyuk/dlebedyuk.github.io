// English translations. Same facts as the Russian content, nothing added.
// Fields that are TODO in Russian stay TODO here (see getContent: they fall back to 'TODO').

import type { CaseStudy, CaseStudyCategory } from './case-studies';

export const profileEn = {
  tagline:
    'Technical Project / Program Manager',
  metaDescription:
    'I run interconnected projects in grain logistics: government system and EDI integrations, electronic waybills, time slots. Experience, case studies and skills.',
  summary:
    'Technical project manager with experience in integrations and API development. I lead cross-functional teams (including external ones) at every stage: from decomposing business tasks to launching solutions in production. I understand system architecture and how services interact, and I work at the intersection of business and development. I work with complex integrations and legacy systems and help get tasks to delivery faster.',
  about:
    'My development background lets me talk to business and technical specialists in the same language. I like diving deep into the details and taking part in decisions that are not only business ones but also, for example, infrastructure or technology ones. I believe the key to sustainable long-term work is a shared understanding within the team, both of processes and of how people interact.',
  location: 'Rostov-on-Don, Russia',
  facts: ['Rostov-on-Don', 'remote / hybrid', 'open to business trips', 'open to relocation'],
};

export const keySkillsEn = [
  'I rebuild an understanding of complex, poorly documented systems',
  'I connect business, development and external teams',
  'I take on product and analytical tasks when there is no dedicated role',
  'I take changes through to launch, including regulatory requirements',
  'I organise work during critical failures and keep stakeholders informed',
];

export const enjoySolvingEn = [
  { title: 'Integrations', description: 'Stitching heterogeneous systems — APIs, EDI, external vendors — into one working process.' },
  { title: 'Incident response', description: 'Working incidents while they are hot: assembling the right people and keeping stakeholders informed.' },
  { title: 'Technical investigations', description: 'Reconstructing a system map from code and traffic when there is no documentation, and digging to the real cause.' },
  { title: 'Working with legislation', description: 'Turning regulatory requirements into clear tasks and hitting deadlines set by legislation, not by the backlog.' },
  { title: 'Working with several teams', description: 'Keeping several teams and projects in one context at once.' },
  { title: 'Gathering requirements under uncertainty', description: 'Gathering requirements and launching changes when part of the information is simply unavailable.' },
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

type CaseEn = Partial<Omit<CaseStudy, 'slug' | 'category'>>;

export const caseStudiesEn: Record<string, CaseEn> = {
  'port-transit-incident': {
    title:
      'Emergency halt of vehicle intake at the terminal',
    context:
      'Due to changing weather conditions and internal issues, the terminal could not accept vehicles. Vehicle intake had to be stopped urgently and all slots already booked at the terminal deleted. A manager from another project asked for help.',
    problem:
      'The failure blocked vehicle intake at the terminal — not a side process, but the site\'s core operation.',
    whyHard:
      'The right people from different teams had to be assembled quickly and a plan built in real time, without a ready-made runbook for this particular case.',
    role:
      'Joined as the technical manager.',
    decisions:
      'Brought managers, developers and leadership together; built an action plan and order of steps together with my manager; then coordinated execution and communication between participants, keeping stakeholders informed on progress.',
    tradeoffs:
      'To move faster, we deleted the slots manually.',
    outcome:
      'Vehicle intake was stopped and the booked slots deleted. Afterwards I wrote a runbook in case the situation happens again.',
  },
  'fgis-zerno': {
    title:
      'Migrating to the new FGIS "Zerno" integration',
    context:
      'The integration with FGIS "Zerno" (the state grain traceability system) ran on the old scheme — we had to move to the new one.',
    problem:
      'The new integration had to be designed, built into the system, run in parallel with the old one and debugged. Along the way it turned out the new integration was not delivering all the data we needed.',
    whyHard:
      'The FGIS support team gave no concrete answers. Logs and exchange details had to be pulled out through a series of emails, each giving only part of the picture.',
    role:
      'Project manager.',
    decisions:
      'Ran the new integration in parallel with the old one so the migration would not stop operations. Kept pressing FGIS support until they pointed out what needed to change on our side.',
    outcome:
      'We made the changes on our side that support recommended — the new integration started working and delivering all the data we needed.',
  },
  'etrn-launch': {
    title:
      'Launching vehicle intake via electronic waybills (ETrN) at the terminal',
    context:
      'From 1 September, electronic transport waybills (ETrN) became mandatory: without them the terminal could not accept vehicles. There was no dedicated product manager on the project.',
    problem:
      'ETrN intake had to be delivered by a hard regulatory deadline — otherwise the terminal would lose the ability to accept vehicles.',
    whyHard:
      'A hard legal deadline with no option to postpone, plus no dedicated product role — I had to cover requirements gathering, prioritisation and alignment myself.',
    role:
      'Gathered requirements, worked out the ETrN business process, and aligned the solution between the business and development.',
    decisions:
      'Coordinated the implementation of ETrN vehicle intake and tracked the solution’s readiness for the mandatory date.',
    tradeoffs:
      'To meet the deadline we dropped part of the automation — those steps were done manually at launch.',
    outcome:
      'Got the terminal ready for the regulatory change and kept it able to accept vehicles.',
  },
  'etrn-edo-scenarios': {
    title:
      'Electronic waybill scenarios and EDI operator roaming',
    context:
      'To develop our internal system for electronic transport waybills (ETrN), I had to understand complex ETrN scenarios and how EDI operators interact with each other.',
    problem:
      'The product manager on the project changed — the new person had to be brought up to speed.',
    whyHard:
      'ETrN and electronic waybill (EPL) business processes are complex in themselves, and all the technical expertise on the project sat with me. Onboarding a newcomer into that context without losing pace was a task of its own.',
    role:
      'Development manager: studied the ETrN, EPL and SDIZ business processes and the regulations, analysed roaming between EDI operators, worked with external teams.',
    decisions:
      'Drafted proposals for improvements and turned regulatory requirements into clear tasks for the team.',
    outcome:
      'The new product manager got up to speed and works independently, work on the project never stopped, and the ETrN scenarios are worked out.',
  },
  glonass: {
    title:
      'GLONASS integration against fraud',
    context:
      'The business knew some drivers were committing fraud. They had to be identified by the actual location of their vehicles.',
    problem:
      'Vehicle location data from the existing GLONASS service had to be connected quickly.',
    whyHard:
      'The request was urgent, and the developers already had work in progress.',
    role:
      'Organised the integration with the existing GLONASS service.',
    decisions:
      'Decided which side handles which part of the data processing. Raised the priority of the integration and moved developers off their current tasks onto it for a few days.',
    tradeoffs:
      'Other tasks were postponed for that time.',
    outcome:
      'We became able to analyse vehicle locations and identify the ones committing fraud.',
  },
  'certificate-automation': {
    title:
      'Automating deadline tracking',
    context:
      'The team was tired of things with a deadline popping up on a regular basis — certificates or any other action that has to be done on time — and having to handle each one in a rush.',
    problem:
      'Tracking deadlines by hand carried the risk of missing a critical date and ending up with an incident.',
    whyHard:
      'Deadline data was scattered across different sources, and it was unclear how to bring it all into one place.',
    role:
      'Built the deadline-tracking service myself — from scratch to a working result, with the help of AI tools — and got it running.',
    decisions:
      'Set up notifications and calendar reminders for expiring deadlines; connected the form, the service and the calendar, and set up automatic event creation.',
    tradeoffs:
      '',
    outcome:
      'Reduced manual tracking effort and the risk of missing a critical deadline.',
  },
  'payment-automation': {
    title:
      'Automating payment processing',
    context:
      'When invoices were paid, receiving payments and processing the data between systems was done by hand.',
    problem:
      'Because of the human factor, processing took a long time and errors happened.',
    whyHard:
      'The manual process worked poorly, and it was unclear how to rebuild it properly.',
    role:
      'Analysed the payment intake process.',
    decisions:
      'Decided to automate the processing, got leadership sign-off and explained to the developers how it should work.',
    tradeoffs:
      '',
    outcome:
      'Removed human involvement from payment processing in all but truly non-standard cases.',
  },
  'carrier-product-ownership': {
    title:
      'Product ownership for one user group',
    context:
      'We needed to understand how one of our user groups used the app and whether it was worth investing in new functionality for them. Leadership proposed running a promo campaign to see whether it would give users more motivation to use the app.',
    problem:
      'There was no dedicated product manager on the project.',
    whyHard:
      'I had never done product work before — I had to take on the whole product role.',
    role:
      'Owned the product direction end to end.',
    decisions:
      'Designed the promo landing page and organised its launch. Mapped the existing metrics, added new ones and chose a North Star Metric. Shaped and delivered the requirements together with the development team. Built a framework for measuring the landing page’s impact on the metrics and presented it to leadership.',
    tradeoffs:
      '',
    outcome:
      'Gathered the data on which leadership and I jointly decided not to invest in new functionality for this user group.',
  },
  'kontur-integration': {
    title:
      'Restoring and launching an integration with a third-party system',
    context:
      'The company had an integration with a third-party system, but nobody fully understood how it worked. We needed to set up receiving data through it.',
    problem:
      'Technically the integration was built correctly, but the legal side had to be sorted out and it had to be pinned down which access keys we were using.',
    whyHard:
      'Nobody on the team understood how the integration was set up, and the blocker turned out to be legal rather than technical — without the right paperwork it could not work.',
    role:
      'Project manager.',
    decisions:
      'Reconstructed how the integration worked from the legal side, initiated signing an additional contract and registered the connection under the correct legal entity.',
    tradeoffs:
      '',
    outcome:
      'Contracts are signed, the setup is documented, the integration works as it should, and the team understands how it is built.',
  },
  'production-investigation': {
    title: 'Technical investigation of anomalous changes in production',
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
  },
  'telegram-bot-waybills': {
    title:
      'Designing a Telegram bot for working with waybills',
    context:
      'The existing channel for getting waybills was inconvenient — the path to them had to be shortened with a Telegram bot working with the internal API.',
    problem:
      'The user scenarios and the bot’s technical logic for working with the internal API had to be designed independently.',
    whyHard:
      'The task was entirely mine, start to finish, with no help from anyone else.',
    role:
      'Designed the bot: wrote a document covering the scenarios, how it would work technically, which requests had to be added and what could be reused from the existing system.',
    decisions:
      'Agreed the user scenarios with leadership; defined the level of the bot’s interaction with the system via the API.',
    tradeoffs:
      '',
    outcome:
      'Delivered complete requirements the bot was built from. After legislative changes, the bot was moved to the MAX messenger.',
  },
};
