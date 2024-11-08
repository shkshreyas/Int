import { 
  BeakerIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Diagnostics',
    description: 'Advanced artificial intelligence for accurate medical diagnosis and treatment recommendations.',
    icon: BeakerIcon,
  },
  {
    name: 'Real-time Monitoring',
    description: 'Continuous patient monitoring with instant alerts and notifications for healthcare providers.',
    icon: ChartBarIcon,
  },
  {
    name: 'Secure Health Records',
    description: 'End-to-end encrypted patient data storage and sharing capabilities.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Mobile-First Approach',
    description: 'Access healthcare services anytime, anywhere through our mobile application.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Better healthcare through technology
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the future of healthcare with our innovative features designed for both patients and healthcare providers.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}