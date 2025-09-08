export const challengeContent = {
  1: {
    id: 1,
    title: "Integrated Work Package Risk Planning",
    scenario: {
      time: "Monday, 7:30 AM - Planning Office",
      description: "You arrive Monday morning to find an urgent work request on your desk. The critical feed pump P-301 in Unit 200 needs bearing replacement during this week's 8-hour maintenance window. This pump feeds the main reactor and cannot be down longer than planned without triggering a unit shutdown costing $450,000 per day.\n\nInitial assessment reveals multiple risk factors:\n• Equipment criticality: No backup pump available during maintenance\n• Work complexity: Requires precision alignment and confined space entry for coupling work\n• Resource constraints: Only one certified millwright available this week\n• Operational pressure: Operations manager demanding 'whatever it takes to stay on schedule'\n• Historical issues: Similar work last year resulted in 3-day extension due to alignment problems\n\nThe maintenance supervisor approaches: 'We need this work package ready by tomorrow morning. Operations is breathing down our necks, and we can't afford any delays like last time.'"
    },
    question: "What is your systematic approach to developing this risk-informed work package?",
    options: {
      A: "Focus on the schedule pressure and create a streamlined work package using standard procedures to meet the tight timeline",
      B: "Conduct comprehensive risk identification across all hazard categories, then integrate specific controls into each work step based on risk analysis",
      C: "Delegate the risk assessment to the safety department while you focus on the technical work planning",
      D: "Use the previous year's work package with minor modifications since it's the same equipment"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Focusing primarily on schedule pressure without systematic risk assessment repeats the patterns that caused last year's 3-day extension. Research shows that 67% of maintenance delays result from inadequate risk planning during the initial work package development.",
        guidingQuestion: "How do the risk identification methods from Module 1 apply to this maintenance planning situation? What specific risk categories should you systematically evaluate?",
        explanation: "A Texas refinery took this approach on critical pump work and experienced a catastrophic seal failure during startup that required emergency shutdown and $2.8 million in lost production plus equipment damage."
      },
      B: {
        correct: true,
        message: "Creating comprehensive risk identification demonstrates mastery of systematic risk assessment by applying audience analysis and sender responsibility principles. This enables parallel response, reduces cognitive overload, and maintains sender accountability.",
        explanation: "Comprehensive risk identification (Module 1) systematically evaluates safety, operational, equipment, and resource risks. Maintenance-specific integration (Module 2) addresses equipment-specific risk factors and operational constraints. Embedded risk controls (Module 5) places risk management directly within execution procedures while incorporating lessons from previous failures."
      },
      C: {
        correct: false,
        message: "Risk management is a line responsibility that must be integrated by planners, not delegated to separate departments. Module 5 emphasizes that planners are uniquely positioned to embed risk controls where they can be most effective - in the work packages themselves.",
        guidingQuestion: "What is your specific role as a planner in risk management according to Module 5? How do you embed risk management directly into planning deliverables?",
        explanation: "A petrochemical plant using this approach saw 43% of safety procedures ignored during execution because workers focused on work instructions rather than separate safety documents."
      },
      D: {
        correct: false,
        message: "Previous work packages that resulted in failures indicate inadequate risk management that will likely repeat without systematic improvement. Module 2 emphasizes learning from maintenance experience to enhance future planning.",
        guidingQuestion: "What can the previous failure teach you about risk factors that weren't properly addressed? How should maintenance-specific risk considerations from Module 2 inform your new approach?",
        explanation: "A chemical plant that reused failed work packages experienced 58% higher rework rates and continued to repeat the same execution problems year after year."
      }
    }
  },
  2: {
    id: 2,
    title: "Turnaround Critical Path Risk Management",
    scenario: {
      time: "Wednesday, 10:45 AM - Turnaround Planning Room",
      description: "You're in the main planning room for the upcoming Unit 100 turnaround. The critical path runs through reactor vessel inspection, catalyst changeout, and major piping modifications - a 21-day sequence with zero schedule float. The turnaround manager just announced that preliminary vessel inspection photos show unexpected internal corrosion that may require additional metallurgy evaluation and potential vessel modifications.\n\nCurrent situation:\n• Critical path impact: Vessel work is day 8-12 of the turnaround sequence\n• Discovery risk: Metallurgy results won't be available until day 10\n• Resource implications: Additional vessel work would require specialized welders already committed to other critical activities\n• Cost factors: Each day of turnaround extension costs $2.1 million in lost production\n• Regulatory aspects: Vessel modifications require inspection authority approval\n\nThe turnaround manager states: 'We cannot extend this turnaround. Figure out how to manage this risk without impacting our critical path or budget.'"
    },
    question: "What is your systematic approach to managing this complex turnaround risk scenario?",
    options: {
      A: "Proceed with the original schedule and address vessel issues if they're confirmed during execution",
      B: "Immediately extend the turnaround schedule to accommodate potential vessel work and avoid schedule risk",
      C: "Develop contingency resource plans and parallel work streams while establishing decision points for risk response activation",
      D: "Remove the vessel inspection from the turnaround scope to eliminate the schedule risk entirely"
    },
    correctAnswer: "C",
    feedback: {
      A: {
        correct: false,
        message: "Proceeding without contingency planning for known risks violates fundamental turnaround risk management principles. Module 3 emphasizes that schedule pressures require proactive risk management, not risk denial.",
        guidingQuestion: "How do the schedule risk analysis principles from Module 3 apply when you have advance warning of potential critical path impacts?",
        explanation: "A Gulf Coast refinery took this approach and faced 8 days of unplanned extension when vessel repairs were required, costing $16.8 million in lost production plus emergency contractor mobilization costs."
      },
      B: {
        correct: false,
        message: "Automatically extending schedules for potential risks without analysis creates unnecessary costs and may not address the actual risk effectively. Module 3 teaches risk response selection based on probability and impact assessment.",
        guidingQuestion: "What risk response strategies from Module 3 allow you to address risks without automatically accepting the highest cost option?",
        explanation: "A petrochemical plant that automatically extended turnarounds for potential issues spent $12 million in unnecessary downtime costs over three years while still experiencing execution problems."
      },
      C: {
        correct: true,
        message: "Developing contingency resource plans and parallel work streams demonstrates advanced integration of systematic risk management with proactive response planning. This enables risk mitigation while maintaining schedule objectives.",
        explanation: "Proactive contingency planning (Module 3) develops resource and schedule alternatives before they're needed. Risk response optimization uses mitigation strategies to address risks without accepting worst-case outcomes. Decision point management establishes clear trigger points for contingency activation while maintaining stakeholder confidence through systematic planning."
      },
      D: {
        correct: false,
        message: "Removing required inspection work creates safety and regulatory risks far greater than schedule risks. Module 3 emphasizes that risk response must consider all risk categories, not just schedule impacts.",
        guidingQuestion: "How do you balance different risk categories when managing complex turnaround risks? What does Module 3 teach about comprehensive risk response?",
        explanation: "A chemical plant that deferred vessel inspection experienced a catastrophic failure 6 months later, resulting in $45 million in damages and regulatory sanctions."
      }
    }
  },
  3: {
    id: 3,
    title: "Capital Project Interface Risk Coordination",
    scenario: {
      time: "Friday, 2:00 PM - Project Phoenix Office",
      description: "You're planning coordinator for Project Phoenix - a $45 million brownfield expansion that adds a new process unit while maintaining operations in adjacent areas. The project involves complex interfaces between multiple engineering contractors, construction companies, and ongoing plant operations.\n\nCritical interfaces creating risk:\n• New unit tie-ins to existing utilities during a 4-day operational window\n• Shared construction access through active production areas\n• Technology integration between new advanced control systems and existing DCS infrastructure\n• Regulatory approvals required from three different agencies with overlapping jurisdictions\n• Contractor coordination between 5 prime contractors with different safety standards and procedures\n\nThis morning's coordination meeting revealed several emerging risks:\n• Engineering Contractor A's design changes affect Contractor B's foundation work\n• The new control system integration is 3 weeks behind schedule\n• Regulatory approval delays may push operational tie-ins into peak production season\n• Construction access conflicts between contractors are creating safety incidents\n\nThe project manager states: 'These interface problems are threatening our timeline and budget. We need systematic coordination to prevent this project from failing.'"
    },
    question: "What is your systematic approach to managing these complex interface risks?",
    options: {
      A: "Schedule weekly coordination meetings with all contractors and hope better communication solves the problems",
      B: "Implement systematic interface risk identification, establish coordination protocols, and create integrated risk monitoring across all project phases",
      C: "Focus on the most critical interfaces and let other coordination issues work themselves out during execution",
      D: "Escalate all interface problems to senior management for resolution since they cross organizational boundaries"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Weekly meetings without systematic interface risk management create coordination theater that doesn't address underlying risk factors. Module 4 emphasizes that complex projects require structured interface management, not just communication.",
        guidingQuestion: "What specific interface risk management tools from Module 4 are needed to address complex multi-contractor coordination systematically?",
        explanation: "A major petrochemical project used this approach and still experienced $23 million in cost overruns and 8-month delays due to unmanaged interface risks that meetings discussed but never systematically addressed."
      },
      B: {
        correct: true,
        message: "Implementing systematic interface risk identification with coordination protocols demonstrates mastery of complex project risk management. This creates comprehensive coverage with integrated monitoring across organizational and technical boundaries.",
        explanation: "Comprehensive interface identification (Module 4) maps all organizational, technical, and operational interfaces systematically. Risk-based prioritization focuses resources on highest-risk interfaces while maintaining oversight. Integrated monitoring systems create visibility across project phases and contractor boundaries with proactive coordination protocols."
      },
      C: {
        correct: false,
        message: "Interface risks are interdependent - problems in secondary interfaces often cascade to affect critical interfaces. Module 4 teaches that interface management requires comprehensive coverage with risk-based prioritization.",
        guidingQuestion: "How do interface interdependencies in Module 4 create risks when secondary interfaces are not properly managed?",
        explanation: "A chemical plant expansion ignored 'minor' interface risks that ultimately created a 6-month delay when cascading problems affected critical path activities during commissioning."
      },
      D: {
        correct: false,
        message: "Escalating operational interface issues to senior management creates bottlenecks and delays while removing problem-solving from the most knowledgeable level. Module 4 emphasizes that planners are uniquely positioned to coordinate technical interfaces.",
        guidingQuestion: "What is your specific role as a planner in capital project interface risk management according to Module 4? How can you coordinate interfaces systematically?",
        explanation: "A project that over-escalated interface issues saw 3-week average delays for routine coordination decisions and lost the detailed technical knowledge needed for effective solutions."
      }
    }
  },
  4: {
    id: 4,
    title: "Continuous Risk Learning Integration",
    scenario: {
      time: "Monday, 3 weeks later, 9:15 AM - Plant Manager's Office",
      description: "Three weeks have passed since your initial risk management challenges. The results are mixed:\n\n• Pump bearing replacement (Challenge 1): Completed successfully with no rework, but the maintenance team noted that some risk controls seemed excessive and slowed productivity.\n• Turnaround planning (Challenge 2): Contingency plans worked perfectly - vessel work was completed in Scenario B timeframe, but coordination between contractors could have been smoother.\n• Capital project interfaces (Challenge 3): Major interface issues prevented, but weekly coordination meetings are consuming significant time, and some contractors are requesting simplified protocols.\n\nCurrent situation: Your plant manager has called you into her office: 'Your risk management approach has definitely improved our outcomes, but I'm getting feedback that some processes are too complex and time-consuming. We need to evolve this approach - keep the improvements but make it more sustainable. I also want you to develop a system that captures lessons learned and builds our organizational risk management capability.'\n\nThe challenge: How do you evolve from initial risk management implementation to a mature, sustainable system that balances effectiveness with efficiency while building organizational capability?"
    },
    question: "What is your systematic approach to developing sustainable, continuously improving risk management practices?",
    options: {
      A: "Simplify risk management procedures to reduce administrative burden and focus only on the highest-risk activities",
      B: "Implement a comprehensive risk learning system with feedback loops, performance metrics, and capability development that optimizes effectiveness over time",
      C: "Maintain current detailed approaches to ensure risk management rigor isn't compromised by efficiency concerns",
      D: "Create separate risk management systems for different types of work to customize approaches by context"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Simply reducing procedures without systematic optimization can eliminate effective risk controls along with administrative burden. Module 5 emphasizes that mature risk management requires sophistication, not simplification.",
        guidingQuestion: "How do the continuous improvement principles from Module 5 help optimize risk management effectiveness rather than just reducing complexity?",
        explanation: "A chemical plant that simplified risk procedures saw a 35% increase in risk events within 6 months as effective controls were removed along with administrative steps."
      },
      B: {
        correct: true,
        message: "Implementing a comprehensive risk learning system demonstrates mastery of continuous improvement principles by integrating feedback loops, performance measurement, and capability development into a sustainable system.",
        explanation: "Systematic feedback integration (Module 5) captures lessons learned to drive continuous improvement. Performance measurement (Module 1) uses metrics to optimize risk management effectiveness. Capability development (Module 5) builds organizational risk management maturity over time while balancing effectiveness with sustainability through systematic improvement."
      },
      C: {
        correct: false,
        message: "Refusing to adapt based on feedback prevents organizational learning and can create resistance that undermines risk management effectiveness. Module 5 teaches that sustainable systems must evolve based on experience.",
        guidingQuestion: "What does Module 5 teach about balancing risk management rigor with practical sustainability? How do feedback systems improve effectiveness?",
        explanation: "A petrochemical facility that maintained rigid risk procedures experienced declining compliance as workers found workarounds for overly complex requirements, ultimately reducing actual risk management effectiveness."
      },
      D: {
        correct: false,
        message: "Creating multiple separate systems increases complexity and prevents organizational learning across different work contexts. Modules 1-5 teach that risk management principles are consistent while applications adapt to context.",
        guidingQuestion: "How do the integrated risk management principles from Modules 1-5 create consistency while allowing contextual adaptation? What role do feedback systems play?",
        explanation: "A refinery that created separate risk systems for different work types saw 40% duplication of effort and inconsistent risk management quality as systems didn't benefit from shared learning."
      }
    }
  }
}