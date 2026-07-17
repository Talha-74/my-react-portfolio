export const caseStudiesData = [
  {
    id: 'fueldaftar',
    number: '01',
    title: 'FuelDaftar',
    eyebrow: 'Multi-branch accounting platform',
    summary: 'A Laravel product for fuel-station operators who need branch-level accounting, transaction workflows, and reporting without spreadsheet drift.',
    tags: ['Laravel', 'MySQL', 'Financial workflows', 'Reporting'],
    role: 'Backend architecture, data modelling, workflow implementation, reporting UI support',
    result: 'Replaced scattered manual accounting steps with a structured operational system that can track businesses, branches, transactions, and reports in one place.',
    slug: 'fueldaftar',
    accent: '#d3a35d',
    architecture: ['Business setup', 'Branch ledger', 'Transaction validation', 'Reporting views', 'Operator review'],
    sections: {
      context: 'Fuel-station operations create repeated, detail-heavy bookkeeping work across businesses and branches.',
      problem: 'The system needed to keep daily financial activity understandable while still supporting structured branch reporting and operational review.',
      constraints: 'Accounting flows had to remain explicit, auditable, and usable by non-technical operators. The implementation avoids invented automation claims and focuses on reliable workflow structure.',
      decisions: ['Model branch ownership and transaction state before designing screens.', 'Keep reporting queries aligned with real operational questions.', 'Use Laravel conventions so future maintenance remains predictable.'],
      improve: 'Add deeper automated reconciliation and richer export controls after validating the next set of operator workflows.'
    }
  },
  {
    id: 'healthcare-reporting-pipeline',
    number: '02',
    title: 'Healthcare Reporting Pipeline',
    eyebrow: 'Data conversion, validation, and dashboards',
    summary: 'A confidential healthcare automation workflow for turning source files into validated, dashboard-ready records.',
    tags: ['Automation', 'Data validation', 'Dashboards', 'ETL'],
    role: 'Workflow design, conversion logic, validation rules, dashboard data preparation',
    result: 'Made repetitive reporting work more consistent by separating source ingestion, checks, transformation, storage, and dashboard review.',
    slug: 'healthcare-reporting-pipeline',
    accent: '#ff493d',
    architecture: ['Source files', 'Validation', 'Transformation', 'Database', 'Dashboard'],
    sections: {
      context: 'Healthcare reporting work often arrives as files that require careful normalization before the data is useful.',
      problem: 'Manual conversion introduces avoidable errors and makes it harder to trust reporting output.',
      constraints: 'The public case study keeps client and patient specifics confidential while describing the engineering workflow at a useful level.',
      decisions: ['Treat validation as a first-class step, not a final clean-up task.', 'Keep transformations traceable from source to dashboard.', 'Design the workflow around failure visibility and repeatability.'],
      improve: 'Add richer anomaly reports and self-serve import previews for non-technical reviewers.'
    }
  },
  {
    id: 'resilient-web-data-pipeline',
    number: '03',
    title: 'Resilient Web Data Pipeline',
    eyebrow: 'Automated collection and monitoring',
    summary: 'A data collection platform approach for dynamic websites where discovery, deduplication, scheduling, and failure monitoring matter.',
    tags: ['Browser automation', 'Scraping', 'Monitoring', 'Scheduling'],
    role: 'Automation strategy, extraction flow, deduplication planning, operational monitoring',
    result: 'Converted fragile manual collection into a repeatable pipeline shape with clearer failure points and recovery paths.',
    slug: 'resilient-web-data-pipeline',
    accent: '#73c991',
    architecture: ['Discovery', 'Extraction', 'Deduplication', 'Scheduled jobs', 'Failure review'],
    sections: {
      context: 'Dynamic websites change frequently and require collection systems that can fail visibly instead of silently producing bad data.',
      problem: 'Simple scripts are easy to start but hard to trust when markup changes, duplicates appear, or scheduled runs fail.',
      constraints: 'The public write-up avoids naming private targets and focuses on the reusable engineering pattern.',
      decisions: ['Separate discovery from extraction so target changes are easier to diagnose.', 'Deduplicate close to ingestion before downstream consumers rely on records.', 'Expose run status and failure reasons for operational review.'],
      improve: 'Introduce stronger alert thresholds and target-specific health dashboards as the pipeline grows.'
    }
  }
]

export const portfolioSectionsData = {
  systemThinking: {
    eyebrow: 'System thinking',
    title: 'Business rules first, interface second.',
    body: 'I start by understanding the workflow, data shape, edge cases, and failure modes. The UI then becomes a clear surface over a reliable system rather than decoration over uncertainty.',
    steps: ['Map the real workflow', 'Model the data and constraints', 'Build the smallest reliable path', 'Verify against edge cases', 'Improve with production feedback']
  },
  toolkit: ['Laravel', 'PHP', 'React', 'JavaScript', 'MySQL', 'REST APIs', 'Automation', 'Web scraping', 'Data workflows', 'Git', 'Vite'],
  process: [
    { title: 'Clarify', text: 'Define the real business rule, user action, and success state before choosing implementation details.' },
    { title: 'Shape', text: 'Turn workflows into data models, API boundaries, and interface states.' },
    { title: 'Build', text: 'Ship a focused version with readable code, accessible UI, and predictable deployment behavior.' },
    { title: 'Harden', text: 'Test edge cases, improve observability, and document what should change next.' }
  ],
  experiments: [
    'AI-assisted product development workflows',
    'Terminal-inspired interface patterns',
    'Lightweight automation prototypes'
  ]
}
