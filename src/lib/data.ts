import type { Doctor, Service, Testimonial, Post } from '@/lib/types';
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Bone,
  Brain,
  Microscope,
  PersonStanding,
  Smile,
  ShieldAlert,
  Scissors,
  Users,
  Waves,
  Eye,
  Sparkles,
  Syringe,
  FlaskConical,
  Activity,
  HeartHandshake,
} from 'lucide-react';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Ada Okoro',
    specialty: 'Cardiologist',
    image: 'doctor2',
    qualifications: ['MBBS', 'FWACP'],
    experience: '15+ years of experience in treating heart conditions.',
    languages: ['English', 'Igbo', 'Yoruba'],
  },
  {
    id: '2',
    name: 'Dr. Tunde Bello',
    specialty: 'Pediatrician',
    image: 'doctor1',
    qualifications: ['MBBS', 'FMCPaed'],
    experience: '12+ years of experience in child health care.',
    languages: ['English', 'Yoruba'],
  },
  {
    id: '3',
    name: 'Dr. Fatima Aliyu',
    specialty: 'Neurologist',
    image: 'doctor3',
    qualifications: ['MBBS', 'FMCNeurol'],
    experience: '10+ years of experience with neurological disorders.',
    languages: ['English', 'Hausa'],
  },
  {
    id: '4',
    name: 'Dr. Chinedu Eze',
    specialty: 'Orthopedic Surgeon',
    image: 'doctor4',
    qualifications: ['MBBS', 'FWACS'],
    experience: '18+ years of experience in orthopedic surgery.',
    languages: ['English', 'Igbo'],
  },
];

export const services: Service[] = [
  { name: 'Pregnancy & Delivery', description: 'Comprehensive maternity care from conception through delivery.', icon: HeartHandshake },
  { name: 'Babies & Children Care', description: 'Specialized pediatric services for your little ones.', icon: Baby },
  { name: 'Adults & Elderly Care', description: 'Holistic care for adults and seniors, promoting lifelong wellness.', icon: PersonStanding },
  { name: 'Jaundice Babies Care', description: 'Expert diagnosis and treatment for neonatal jaundice.', icon: Sparkles },
  { name: 'Accidents & Emergencies', description: '24/7 emergency services for urgent medical needs.', icon: ShieldAlert },
  { name: 'Surgeries & Operations', description: 'A wide range of surgical procedures performed by expert surgeons.', icon: Scissors },
  { name: 'Optical Services', description: 'Complete eye care, from vision tests to treatment of eye diseases.', icon: Eye },
  { name: 'Dental Services', description: 'Comprehensive dental care for a healthy smile.', icon: Smile },
  { name: 'Dermatological Care', description: 'Treatment for skin, hair, and nail conditions.', icon: Activity },
  { name: 'Family Planning', description: 'Confidential counseling and services for family planning.', icon: Users },
  { name: 'Physiotherapy', description: 'Rehabilitation services to restore movement and function.', icon: Waves },
  { name: 'Ultrasound Scan', description: 'Advanced diagnostic imaging services.', icon: Microscope },
  { name: 'Circumcision', description: 'Safe and sterile circumcision procedures.', icon: Stethoscope },
  { name: 'Immunization', description: 'Complete immunization services for all ages.', icon: Syringe },
  { name: 'Laboratory Services', description: 'Accurate and timely diagnostic testing.', icon: FlaskConical },
];


export const testimonials: Testimonial[] = [
    { id: '1', name: 'Mrs. Aisha Lawal', quote: 'The care I received at MedConnect was exceptional. The doctors and nurses were so professional and compassionate.', image: 'testimonial1' },
    { id: '2', name: 'Mr. David Obinna', quote: 'Booking an appointment was seamless, and I was seen right on time. Highly recommend this hospital for their efficiency.', image: 'testimonial2' },
    { id: '3', name: 'Chief Funke Adebayo', quote: 'From the reception to the consulting room, every staff member was friendly and helpful. A truly world-class facility.', image: 'testimonial3' },
];

export const posts: Post[] = [
    { 
        id: '1', 
        slug: 'understanding-malaria-prevention', 
        title: 'Understanding Malaria: Prevention and Treatment', 
        excerpt: 'Malaria remains a significant health concern in Nigeria. Learn about the most effective prevention strategies and modern treatment options available.', 
        content: 'Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. It is preventable and curable. In 2022, there were an estimated 249 million cases of malaria worldwide. The WHO African Region carries a disproportionately high share of the global malaria burden. In 2022, the Region was home to 94% of malaria cases and 95% of malaria deaths. Children under 5 years of age are the most vulnerable group affected by malaria; in 2022, they accounted for nearly 80% of all malaria deaths in the WHO African Region. Key interventions to control malaria include: insecticide-treated mosquito nets, intermittent preventive treatment for pregnant women and infants, and effective case management.',
        image: 'blog1',
        date: '2024-05-15'
    },
    { 
        id: '2', 
        slug: 'managing-hypertension-in-nigeria', 
        title: 'Managing Hypertension: A Guide for Nigerians', 
        excerpt: 'High blood pressure is a silent killer. Discover lifestyle changes and medical advice to keep your blood pressure in check.', 
        content: 'Hypertension, or high blood pressure, is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. Blood pressure is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries. The more blood your heart pumps and the narrower your arteries, the higher your blood pressure. You can have high blood pressure for years without any symptoms. Uncontrolled high blood pressure increases your risk of serious health problems, including heart attack and stroke. Fortunately, high blood pressure can be easily detected. And once you know you have high blood pressure, you can work with your doctor to control it.',
        image: 'blog2',
        date: '2024-05-20'
    },
    { 
        id: '3', 
        slug: 'importance-of-regular-health-checkups', 
        title: 'The Importance of Regular Health Check-ups', 
        excerpt: 'Why wait until you are sick? Regular health screenings can help detect problems early and improve your long-term health outcomes.',
        content: 'Regular health check-ups can help find problems before they start. They also can help find problems early, when your chances for treatment and cure are better. Which exams and screenings you need depends on your age, health and family history, and lifestyle choices such as what you eat, how active you are, and whether you smoke. By getting the right health services, screenings, and treatments, you are taking steps that help your chances for living a longer, healthier life. Your age, health and family history, lifestyle choices (i.e. what you eat, how active you are, whether you smoke), and other important factors impact what and how often you need healthcare.',
        image: 'blog3',
        date: '2024-05-25'
    },
];

export const departments = [
    "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "General Medicine", "Obstetrics & Gynecology", "Surgery", "Diagnostics"
];
