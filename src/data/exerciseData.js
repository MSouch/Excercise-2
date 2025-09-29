export const exerciseContent = {
  1: {
    id: 1,
  title: "Comprehensive Risk Assessment Matrix",
  description: "Apply systematic risk identification to the pump bearing replacement, then integrate controls into work procedures",
    fields: [
      {
        id: 'safety_risks',
        label: 'Safety Risks - Specific Risk Identified',
        type: 'textarea',
        placeholder: 'Identify specific safety risks for this maintenance work...'
      },
      {
        id: 'safety_probability',
        label: 'Safety Risks - Probability (H/M/L)',
        type: 'select',
        options: ['High', 'Medium', 'Low']
      },
      {
        id: 'safety_consequence',
        label: 'Safety Risks - Consequence (H/M/L)',
        type: 'select',
        options: ['High', 'Medium', 'Low']
      },
      {
        id: 'safety_control',
        label: 'Safety Risks - Risk Control Method',
        type: 'textarea',
        placeholder: 'Describe specific control methods...'
      },
      {
        id: 'equipment_risks',
        label: 'Equipment Risks - Specific Risk Identified',
        type: 'textarea',
        placeholder: 'Identify specific equipment risks...'
      },
      {
        id: 'equipment_probability',
        label: 'Equipment Risks - Probability (H/M/L)',
        type: 'select',
        options: ['High', 'Medium', 'Low']
      },
      {
        id: 'equipment_consequence',
        label: 'Equipment Risks - Consequence (H/M/L)',
        type: 'select',
        options: ['High', 'Medium', 'Low']
      },
      {
        id: 'equipment_control',
        label: 'Equipment Risks - Risk Control Method',
        type: 'textarea',
        placeholder: 'Describe specific control methods...'
      },
      {
        id: 'operational_risks',
        label: 'Operational Risks - Specific Risk Identified',
        type: 'textarea',
        placeholder: 'Identify specific operational risks...'
      },
      {
        id: 'operational_control',
        label: 'Operational Risks - Risk Control Method',
        type: 'textarea',
        placeholder: 'Describe specific control methods...'
      },
      {
        id: 'risk_integrated_step1',
        label: 'Risk-Integrated Work Step 1: "Remove coupling and extract rotor for bearing replacement"',
        type: 'textarea',
        placeholder: 'Transform this into a risk-integrated work instruction...'
      },
      {
        id: 'risk_integrated_step2',
        label: 'Risk-Integrated Work Step 2: "Install new bearings and reassemble"',
        type: 'textarea',
        placeholder: 'Transform this into a risk-integrated work instruction...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Risk Identification Framework",
          points: [
            "Safety Risks: Confined space entry for coupling work (Medium probability, High consequence) - Entry permit, atmospheric monitoring, attendant required",
            "Equipment Risks: Precision alignment failure causing vibration (High probability, High consequence) - Laser alignment tools, certified technician verification",
            "Operational Risks: Extended downtime beyond 8-hour window (Medium probability, High consequence) - Contingency planning, management escalation protocols",
            "Resource Risks: Single certified millwright creates bottleneck (High probability, Medium consequence) - Backup technician on standby, cross-training programs"
          ]
        },
        {
          title: "Risk-Integrated Work Instructions",
          points: [
            "Enhanced Step 1: Obtain confined space entry permit and verify atmospheric monitoring before entering pump pit. Remove coupling using proper lifting equipment with certified rigger present. HOLD POINT: Verify rotor extraction path clear before proceeding.",
            "Enhanced Step 2: Install bearings using hydraulic press with pressure monitoring to prevent over-installation. Verify bearing seating with dial indicator measurements. VERIFICATION: All measurements within ±0.001\" specification before assembly."
          ]
        },
        {
          title: "Systematic Integration Benefits",
          points: [
            "Embedded risk controls prevent execution problems through integrated procedures rather than separate safety documents",
            "Systematic risk identification from Lesson 1 combined with maintenance-specific considerations from Lesson 2 creates comprehensive coverage",
            "Hold points and verification steps ensure quality while maintaining schedule objectives"
          ]
        }
      ],
      keyTakeaways: [
        "Systematic risk identification creates comprehensive coverage across all hazard categories",
        "Risk-integrated work instructions embed controls where they're most effective during execution",
        "Verification points and hold points prevent quality issues while maintaining schedule performance",
        "Learning from previous failures prevents recurring problems through systematic improvement"
      ]
    }
  },
  2: {
    id: 2,
    title: "Turnaround Risk Contingency Planning",
  description: "Develop comprehensive contingency plans and decision frameworks for the vessel corrosion risk scenario",
    fields: [
      {
        id: 'scenario_a_probability',
        label: 'Scenario A: Minimal Vessel Work Required - Probability (%)',
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
        placeholder: 'Enter probability percentage'
      },
      {
        id: 'scenario_a_impact',
        label: 'Scenario A: Impact (days delay)',
        type: 'number',
        min: 0,
        step: 0.5,
        placeholder: 'Enter days of delay'
      },
      {
        id: 'scenario_a_resources',
        label: 'Scenario A: Resource Requirements',
        type: 'textarea',
        placeholder: 'Describe resource requirements...'
      },
      {
        id: 'scenario_a_actions',
        label: 'Scenario A: Contingency Actions',
        type: 'textarea',
        placeholder: 'Describe contingency actions...'
      },
      {
        id: 'scenario_b_probability',
        label: 'Scenario B: Moderate Vessel Modifications - Probability (%)',
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
        placeholder: 'Enter probability percentage'
      },
      {
        id: 'scenario_b_impact',
        label: 'Scenario B: Impact (days delay)',
        type: 'number',
        min: 0,
        step: 0.5,
        placeholder: 'Enter days of delay'
      },
      {
        id: 'scenario_b_resources',
        label: 'Scenario B: Resource Requirements',
        type: 'textarea',
        placeholder: 'Describe resource requirements...'
      },
      {
        id: 'scenario_b_actions',
        label: 'Scenario B: Contingency Actions',
        type: 'textarea',
        placeholder: 'Describe contingency actions...'
      },
      {
        id: 'decision_point_1',
        label: 'Decision Point 1 - Day 10 (Metallurgy Results Available) - Go/No-Go Criteria',
        type: 'textarea',
        placeholder: 'Define decision criteria...'
      },
      {
        id: 'resource_mitigation',
        label: 'Resource Risk Mitigation: Critical Resource - Certified vessel welders',
        type: 'textarea',
        placeholder: 'Describe risk and mitigation strategy...'
      },
      {
        id: 'communication_plan',
        label: 'Communication Plan - Daily updates and escalation triggers',
        type: 'textarea',
        placeholder: 'Define communication protocols...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Comprehensive Contingency Planning",
          points: [
            "Scenario A: Minimal Vessel Work (40% probability, 1 day delay) - Existing vessel crew, standard grinding equipment, extend vessel work by 1 day with overtime compression",
            "Scenario B: Moderate Vessel Modifications (45% probability, 3 days delay) - 2 additional certified vessel welders, welding equipment, materials, mobilize contract welders by day 8",
            "Scenario C: Extensive Vessel Rebuild (15% probability, 7+ days delay) - Full specialized repair crew, major material procurement, activate emergency contract support"
          ]
        },
        {
          title: "Decision Point Framework",
          points: [
            "Decision Point 1 - Day 10: If metallurgy shows corrosion depth >75% of wall thickness, activate Scenario B contingency resources immediately",
            "Decision Point 2 - Day 12: If repair scope exceeds Scenario B resource capacity, escalate to senior management for Scenario C crisis management",
            "Clear trigger criteria enable rapid response without panic-driven decisions"
          ]
        },
        {
          title: "Resource Risk Mitigation",
          points: [
            "Certified vessel welders: Pre-qualified contract welders on 48-hour standby, cross-training internal resources to reduce bottlenecks",
            "Inspection authority: Early coordination with inspection authority, backup inspector arrangements to prevent completion delays",
            "Material procurement: Parallel sourcing for potential materials, expedited delivery arrangements"
          ]
        }
      ],
      keyTakeaways: [
        "Systematic contingency planning with probability assessments enables resource optimization",
        "Clear decision points with specific criteria prevent delays and enable rapid response",
        "Resource risk mitigation addresses bottlenecks before they impact critical path activities",
        "Communication protocols maintain stakeholder confidence through systematic planning visibility"
      ]
    }
  },
  3: {
    id: 3,
    title: "Interface Risk Management Framework",
  description: "Develop systematic interface risk identification and coordination protocols for Project Phoenix",
    fields: [
      {
        id: 'org_interface_1',
        label: 'Organizational Interface: Engineering Contractor A ↔ Contractor B - Risk Factors',
        type: 'textarea',
        placeholder: 'Identify interface risk factors...'
      },
      {
        id: 'org_interface_1_protocol',
        label: 'Engineering Contractor A ↔ Contractor B - Coordination Protocol',
        type: 'textarea',
        placeholder: 'Define coordination protocol...'
      },
      {
        id: 'org_interface_2',
        label: 'Organizational Interface: Construction ↔ Operations - Risk Factors',
        type: 'textarea',
        placeholder: 'Identify interface risk factors...'
      },
      {
        id: 'org_interface_2_protocol',
        label: 'Construction ↔ Operations - Coordination Protocol',
        type: 'textarea',
        placeholder: 'Define coordination protocol...'
      },
      {
        id: 'tech_interface_1',
        label: 'Technical Interface: New Controls ↔ Existing DCS - Risk Factors',
        type: 'textarea',
        placeholder: 'Identify technical interface risks...'
      },
      {
        id: 'tech_interface_1_protocol',
        label: 'New Controls ↔ Existing DCS - Coordination Protocol',
        type: 'textarea',
        placeholder: 'Define technical coordination protocol...'
      },
      {
        id: 'phase_interface_1',
        label: 'Phase Transition: Design → Construction - Risk Factors',
        type: 'textarea',
        placeholder: 'Identify phase transition risks...'
      },
      {
        id: 'phase_interface_1_protocol',
        label: 'Design → Construction - Coordination Protocol',
        type: 'textarea',
        placeholder: 'Define phase transition protocol...'
      },
      {
        id: 'monitoring_framework',
        label: 'Interface Risk Monitoring Framework - Leading and Lagging Indicators',
        type: 'textarea',
        placeholder: 'Define monitoring indicators and trigger points...'
      },
      {
        id: 'coordination_meetings',
        label: 'Coordination Protocol Framework - Meeting Structure and Decision Authority',
        type: 'textarea',
        placeholder: 'Define meeting protocols and decision-making authority...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Systematic Interface Risk Identification",
          points: [
            "Organizational Interfaces: Engineering Contractor A ↔ Contractor B (Design changes without notification, conflicting specifications) - Daily design coordination meetings, change control process with mandatory notifications",
            "Construction ↔ Operations (Safety standard conflicts, access disruption, communication gaps) - Joint safety meetings, shared permit system, operations liaison assigned",
            "Technical Interfaces: New Controls ↔ Existing DCS (Communication protocol incompatibilities, data integration failures) - Integration testing protocols, factory acceptance testing, phased cutover procedures"
          ]
        },
        {
          title: "Phase Transition Risk Management",
          points: [
            "Design → Construction (Incomplete designs, constructability issues, material procurement delays) - Design readiness reviews, constructability assessments, material delivery tracking",
            "Construction → Commissioning (Incomplete construction, testing equipment availability, system readiness) - Turnover packages, systematic completion verification, commissioning resource staging",
            "Commissioning → Operations (Training gaps, procedure inadequacy, performance guarantee verification) - Operator training certification, procedure validation, performance testing protocols"
          ]
        },
        {
          title: "Integrated Monitoring and Coordination",
          points: [
            "Leading Indicators: Integration test completion percentage, outstanding design issues count, safety incident frequency, permit processing time",
            "Lagging Indicators: System availability during testing, rework hours required, production impact incidents, construction delay days",
            "Coordination Protocols: Weekly technical reviews with lead engineers, monthly interface assessments, escalation criteria for high-risk interfaces"
          ]
        }
      ],
      keyTakeaways: [
        "Systematic interface identification prevents coordination problems through proactive risk management",
        "Phase transition protocols address the highest-risk periods in capital project execution",
        "Integrated monitoring systems provide early warning of interface problems before they cascade",
        "Structured coordination protocols enable systematic problem-solving across organizational boundaries"
      ]
    }
  },
  4: {
    id: 4,
    title: "Risk Management Capability Development System",
  description: "Design a comprehensive system that captures lessons learned, measures performance, and develops organizational capability",
    fields: [
      {
        id: 'feedback_collection',
        label: 'Feedback Collection Framework - Post-Execution Reviews',
        type: 'textarea',
        placeholder: 'Design systematic feedback collection for completed projects...'
      },
      {
        id: 'effectiveness_metrics',
        label: 'Performance Metrics - Effectiveness Measures',
        type: 'textarea',
        placeholder: 'Define metrics that track risk management effectiveness...'
      },
      {
        id: 'efficiency_metrics',
        label: 'Performance Metrics - Efficiency Measures',
        type: 'textarea',
        placeholder: 'Define metrics that track process efficiency...'
      },
      {
        id: 'learning_metrics',
        label: 'Performance Metrics - Learning and Capability Measures',
        type: 'textarea',
        placeholder: 'Define metrics that track organizational learning...'
      },
      {
        id: 'individual_capability',
        label: 'Individual Capability Building - Skill Assessment and Development',
        type: 'textarea',
        placeholder: 'Design individual capability development framework...'
      },
      {
        id: 'organizational_capability',
        label: 'Organizational Capability Building - System Improvements and Knowledge Management',
        type: 'textarea',
        placeholder: 'Design organizational capability development framework...'
      },
      {
        id: 'continuous_improvement',
        label: 'Continuous Improvement Cycle - Review and Assessment Framework',
        type: 'textarea',
        placeholder: 'Design systematic improvement cycle with regular reviews...'
      },
      {
        id: 'capability_ranking',
        label: 'Priority Ranking of Capability Development Components',
        type: 'ranking',
        options: [
          'Systematic feedback collection and analysis',
          'Performance measurement and optimization',
          'Individual skill development and training',
          'Organizational knowledge management systems'
        ]
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Comprehensive Feedback and Learning System",
          points: [
            "Post-Execution Reviews: Risk Management Effectiveness (Controls that worked well, unnecessary controls, missed risks), Efficiency Assessment (time-consuming steps, administrative burden, automation opportunities), Capability Gaps (skills needed, training requirements, resource needs)",
            "Performance Metrics: Effectiveness (Risk event frequency per 100 work packages <2, Risk control success rate >95%, Cost of risk events <1% of project budgets), Efficiency (Planning time per work package, Risk assessment completion time <2 days, Stakeholder satisfaction >4.0/5.0)",
            "Learning Metrics: Lessons learned implementation rate >80%, Risk management skill assessment scores 4.0/5.0 average, Cross-functional knowledge sharing 2 practices per quarter"
          ]
        },
        {
          title: "Individual and Organizational Capability Development",
          points: [
            "Individual Capability: Skill Assessment Areas (Risk identification techniques, Risk analysis methods, Risk integration skills, Stakeholder communication), Development Activities (Training programs, Mentoring assignments, Cross-functional projects, Professional development)",
            "Organizational Capability: System Improvements (Process optimization, Technology integration, Standard improvements), Knowledge Management (Best practice documentation, Lesson learned database, Knowledge sharing mechanisms), Culture Development (Risk awareness building, Recognition programs, Leadership development)"
          ]
        },
        {
          title: "Systematic Continuous Improvement",
          points: [
            "Monthly Reviews: Recent project performance, emerging risk patterns, process effectiveness - Planning team, key stakeholders, management representatives",
            "Quarterly Assessments: Overall system effectiveness, capability development progress, organizational learning - Trend analysis, benchmarking, gap assessment",
            "Annual Planning: Individual development plans, organizational training strategy, competency requirements - Technology upgrades, process improvements, resource allocation"
          ]
        }
      ],
      keyTakeaways: [
        "Systematic feedback collection drives continuous improvement through structured learning cycles",
        "Performance measurement balances effectiveness and efficiency to optimize risk management value",
        "Capability development creates organizational learning systems that improve over time",
        "Mature risk management evolves toward greater effectiveness AND efficiency through systematic optimization"
      ]
    }
  }
}