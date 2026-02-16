import securityImg from '../assets/images/card1.png';
import lightingImg from '../assets/images/card2.png';
import controlHubImg from '../assets/images/card3.png';
import smartSwitchesImg from '../assets/images/card5.png';
import sensorsImg from '../assets/images/card4.png';
import controllersImg from '../assets/images/controllers.jpg';


export const products = [
    {
        id: 'smart-lock-pro',
        name: 'Smart Universal Pin Socket (3-IS)',
        category: 'Smart Home Automation',
        image: securityImg,
        description: 'App-controlled universal wall socket with built-in safety and usage tracking',
        longDescription: 'App-controlled wall outlet supporting international plugs with child safety mechanisms and usage logging.',
        features: [
            'Supports International Plug Types',
            'Remote ON/OFF Control via Mobile App',
            'Built-in Child Safety Protection',
            'Power Usage Monitoring and Logging',
            'Direct Wi-Fi Connectivity (ESP32 Based)'
        ],
        relatedProducts: ['control-hub-v2', 'motion-sensor-x']
    },
    {
        id: 'lighting-kit-v1',
        name: 'Smart Water Tank Plus',
        category: 'Smart Way Control',
        image: lightingImg,
        description: 'Create the perfect atmosphere with adaptive smart lighting.',
        longDescription: 'Automatically monitors water levels and controls the pump motor. It prevents overflow and dry runs while sending energy and time data to your company’s official app via Wi-Fi.',
        features: [
            'Automatic Water Level Monitoring',
            'Wi-Fi App Connectivity',
            'Dry Run Protection',
            'Overflow Protection',
            'Smart Pump Control'
        ],
        relatedProducts: ['smart-switch-touch', 'motion-sensor-x']
    },
    {
        id: 'control-hub-v2',
        name: 'Smart Motor Timer (Agri & Industrial)',
        category: 'Smart Way Control',
        image: controlHubImg,
        description: 'Heavy-duty motor controller with SMS-based remote scheduling.',
        longDescription: 'Heavy-duty motor control solution for agricultural and industrial use. Operates using GSM/SIM technology to allow remote SMS-based scheduling, making it suitable for rural areas with limited internet connectivity.',
        features: [
            'SMS-Based Remote Motor Scheduling',
            'Designed for Heavy-Duty Agricultural Motors',
            'Works Without Internet (GSM/SIM Based)',
            'Dry-Run Protection for Motor Safety',
            'Thermal and Overload Protection'
        ],
        relatedProducts: ['smart-lock-pro', 'controllers-main']
    },
    {
        id: 'smart-switch-touch',
        name: 'Touch Smart Switch',
        category: 'Smart Switches',
        image: smartSwitchesImg,
        description: 'Elegant glass-face smart switch with haptic feedback.',
        longDescription: 'Replace your old toggles with the sleek, tempered glass Touch Smart Switch. Programmable buttons allow for single-tap lighting scenes and multi-tap whole-room control. Elegant LED backlighting ensures visibility at night.',
        features: [
            'Tempered Glass Finish',
            'Haptic Touch Feedback',
            'Multi-Tap Scene Triggering',
            'Energy Monitoring Capability',
            'Universal Load Compatibility'
        ],
        relatedProducts: ['lighting-kit-v1', 'control-hub-v2']
    },
    {
        id: 'motion-sensor-x',
        name: 'Multi-Sensor X',
        category: 'Sensors',
        image: sensorsImg,
        description: 'Occupancy, temperature, and light level sensor in one.',
        longDescription: 'The Multi-Sensor X is a tiny powerhouse. It detects motion for security and automation, monitors temperature for HVAC control, and measures ambient light to adjust your smart blinds or lighting automatically.',
        features: [
            '10-Year Battery Life',
            'Fast Motion Detection (<200ms)',
            'Precise Temperature & Humidity Reading',
            'Ambient Light Measurement',
            'Discreet, Magnetic Mount'
        ],
        relatedProducts: ['lighting-kit-v1', 'smart-lock-pro']
    }
];
