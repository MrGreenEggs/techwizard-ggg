import React, { useState } from 'react';
import { 
  Globe, 
  Search, 
  Cloud, 
  Code, 
  Cpu, 
  HardDrive, 
  Smartphone, 
  Printer, 
  Monitor, 
  Wifi, 
  Server, 
  Router, 
  Shield, 
  Lock, 
  AlertTriangle, 
  Fingerprint, 
  Lightbulb, 
  TrendingUp, 
  BarChart, 
  Clock, 
  GraduationCap, 
  Users, 
  Video, 
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start">
        <div className="p-2 bg-blue-100 rounded-lg mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            {isExpanded ? 'Less details' : 'More details'}
            {isExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
          </button>
          
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      services: [
        {
          icon: <Globe className="h-5 w-5 text-blue-600" />,
          title: "Website Design & Development",
          description: "Custom websites built to your specifications with modern technologies.",
          details: [
            "Responsive design for all devices",
            "UI/UX optimization for better conversion",
            "Content management systems (WordPress, Shopify, etc.)",
            "Custom web applications",
            "E-commerce solutions"
          ]
        },
        {
          icon: <Search className="h-5 w-5 text-blue-600" />,
          title: "SEO Optimization",
          description: "Improve your site's visibility and ranking in search engines.",
          details: [
            "Keyword research and optimization",
            "On-page SEO improvements",
            "Technical SEO audits",
            "Content strategy for SEO",
            "Local SEO for businesses"
          ]
        },
        {
          icon: <Cloud className="h-5 w-5 text-blue-600" />,
          title: "Web Hosting & Management",
          description: "Reliable hosting solutions with ongoing maintenance and support.",
          details: [
            "Domain registration and management",
            "Secure, fast hosting setup",
            "Regular backups and updates",
            "Performance optimization",
            "24/7 monitoring"
          ]
        },
        {
          icon: <Code className="h-5 w-5 text-blue-600" />,
          title: "Custom Web Applications",
          description: "Tailored web applications to meet your specific business needs.",
          details: [
            "Full-stack development",
            "API integration and development",
            "Database design and optimization",
            "Progressive Web Apps (PWAs)",
            "SaaS application development"
          ]
        }
      ]
    },
    {
      title: "Hardware Support",
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      services: [
        {
          icon: <Cpu className="h-5 w-5 text-blue-600" />,
          title: "Computer Repair & Maintenance",
          description: "Diagnostics and repairs for desktops and laptops of all brands.",
          details: [
            "Hardware troubleshooting and repair",
            "Component upgrades (RAM, SSD, etc.)",
            "Operating system installation and recovery",
            "Virus and malware removal",
            "Data recovery services"
          ]
        },
        {
          icon: <HardDrive className="h-5 w-5 text-blue-600" />,
          title: "Data Recovery",
          description: "Retrieve lost data from damaged or corrupted storage devices.",
          details: [
            "Hard drive data recovery",
            "SSD data recovery",
            "Flash drive and memory card recovery",
            "RAID array recovery",
            "Secure data destruction"
          ]
        },
        {
          icon: <Smartphone className="h-5 w-5 text-blue-600" />,
          title: "Mobile Device Repair",
          description: "Repairs and troubleshooting for smartphones and tablets.",
          details: [
            "Screen replacement",
            "Battery replacement",
            "Water damage repair",
            "Software troubleshooting",
            "Data transfer and backup"
          ]
        },
        {
          icon: <Printer className="h-5 w-5 text-blue-600" />,
          title: "Printer & Peripheral Setup",
          description: "Installation and troubleshooting for printers and other peripherals.",
          details: [
            "Printer installation and configuration",
            "Network printer setup",
            "Scanner and multifunction device setup",
            "Driver installation and updates",
            "Maintenance and troubleshooting"
          ]
        }
      ]
    },
    {
      title: "Networking",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      services: [
        {
          icon: <Wifi className="h-5 w-5 text-blue-600" />,
          title: "Wi-Fi Network Setup",
          description: "Design and installation of reliable wireless networks for homes and offices.",
          details: [
            "Wireless site surveys",
            "Access point placement and configuration",
            "Mesh network setup",
            "Wi-Fi security implementation",
            "Network performance optimization"
          ]
        },
        {
          icon: <Server className="h-5 w-5 text-blue-600" />,
          title: "Network Installation",
          description: "Complete network solutions from planning to implementation.",
          details: [
            "Network design and planning",
            "Wired network installation",
            "Network hardware configuration",
            "VLANs and network segmentation",
            "Network documentation"
          ]
        },
        {
          icon: <Router className="h-5 w-5 text-blue-600" />,
          title: "Network Troubleshooting",
          description: "Diagnose and resolve network connectivity and performance issues.",
          details: [
            "Connectivity problem resolution",
            "Network performance analysis",
            "Bandwidth optimization",
            "Latency and packet loss troubleshooting",
            "Quality of Service (QoS) configuration"
          ]
        },
        {
          icon: <Monitor className="h-5 w-5 text-blue-600" />,
          title: "Remote Access Solutions",
          description: "Secure remote access setup for working from anywhere.",
          details: [
            "VPN setup and configuration",
            "Remote desktop solutions",
            "Secure file sharing setup",
            "Cloud collaboration tools",
            "Mobile device access configuration"
          ]
        }
      ]
    },
    {
      title: "Security",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      services: [
        {
          icon: <Shield className="h-5 w-5 text-blue-600" />,
          title: "Cybersecurity Audits",
          description: "Comprehensive evaluation of your security posture and vulnerabilities.",
          details: [
            "Vulnerability scanning and assessment",
            "Security policy review",
            "Risk assessment",
            "Compliance checks",
            "Security awareness evaluation"
          ]
        },
        {
          icon: <Lock className="h-5 w-5 text-blue-600" />,
          title: "Security Implementation",
          description: "Deploy robust security measures to protect your digital assets.",
          details: [
            "Firewall setup and configuration",
            "Antivirus and anti-malware deployment",
            "Email security solutions",
            "Data encryption implementation",
            "Multi-factor authentication setup"
          ]
        },
        {
          icon: <AlertTriangle className="h-5 w-5 text-blue-600" />,
          title: "Incident Response",
          description: "Quick and effective response to security breaches and incidents.",
          details: [
            "Breach containment",
            "Forensic analysis",
            "Malware removal",
            "System recovery",
            "Post-incident security hardening"
          ]
        },
        {
          icon: <Fingerprint className="h-5 w-5 text-blue-600" />,
          title: "Identity & Access Management",
          description: "Control who has access to your systems and data.",
          details: [
            "User access control setup",
            "Password policy implementation",
            "Single sign-on (SSO) configuration",
            "Privileged access management",
            "Access auditing and monitoring"
          ]
        }
      ]
    },
    {
      title: "Consulting",
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
      services: [
        {
          icon: <Lightbulb className="h-5 w-5 text-blue-600" />,
          title: "Technology Strategy",
          description: "Develop a technology roadmap aligned with your business goals.",
          details: [
            "IT needs assessment",
            "Technology stack recommendations",
            "Digital transformation planning",
            "IT budget planning",
            "Technology vendor selection"
          ]
        },
        {
          icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
          title: "Business Process Optimization",
          description: "Improve efficiency through technology-enabled process improvements.",
          details: [
            "Workflow analysis",
            "Process automation opportunities",
            "Productivity tool recommendations",
            "Integration strategy",
            "Change management support"
          ]
        },
        {
          icon: <BarChart className="h-5 w-5 text-blue-600" />,
          title: "IT Infrastructure Assessment",
          description: "Evaluate your current IT infrastructure and recommend improvements.",
          details: [
            "Hardware and software inventory",
            "Infrastructure performance evaluation",
            "Scalability assessment",
            "Disaster recovery planning",
            "Cloud migration strategy"
          ]
        },
        {
          icon: <Clock className="h-5 w-5 text-blue-600" />,
          title: "Project Management",
          description: "Oversee technology projects from planning to implementation.",
          details: [
            "Project scoping and planning",
            "Resource allocation",
            "Timeline and milestone tracking",
            "Risk management",
            "Stakeholder communication"
          ]
        }
      ]
    },
    {
      title: "Training",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      services: [
        {
          icon: <Users className="h-5 w-5 text-blue-600" />,
          title: "Group Workshops",
          description: "Interactive training sessions for teams on various tech topics.",
          details: [
            "Software application training",
            "Cybersecurity awareness",
            "Productivity tool workshops",
            "Technical skill development",
            "Customized training curriculum"
          ]
        },
        {
          icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
          title: "One-on-One Training",
          description: "Personalized instruction tailored to individual learning needs.",
          details: [
            "Software mastery",
            "Hardware troubleshooting skills",
            "Digital literacy fundamentals",
            "Advanced technical skills",
            "Personalized learning path"
          ]
        },
        {
          icon: <Video className="h-5 w-5 text-blue-600" />,
          title: "Remote Learning",
          description: "Virtual training sessions and resources for remote teams.",
          details: [
            "Live virtual workshops",
            "Recorded training modules",
            "Interactive learning materials",
            "Progress tracking",
            "Virtual office hours"
          ]
        },
        {
          icon: <BookOpen className="h-5 w-5 text-blue-600" />,
          title: "Documentation & Guides",
          description: "Custom documentation and how-to guides for your specific systems.",
          details: [
            "Process documentation",
            "User manuals",
            "Video tutorials",
            "Knowledge base creation",
            "Standard operating procedures"
          ]
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].title);

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Services</h2>
          <p className="text-xl text-gray-700">
            Comprehensive tech solutions for businesses and individuals. No job too small or too large.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.title
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>
        
        {serviceCategories.map((category) => (
          <div 
            key={category.title} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${
              activeCategory === category.title ? 'block' : 'hidden'
            }`}
          >
            {category.services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;