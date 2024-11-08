import { CheckCircleIcon } from '@heroicons/react/24/solid'

const benefits = [
  {
    title: 'AI-Powered Healthcare',
    description: 'Advanced artificial intelligence algorithms provide accurate diagnostics and personalized treatment recommendations.',
  },
  {
    title: 'Real-time Monitoring',
    description: 'Continuous patient monitoring with instant alerts for healthcare providers.',
  },
  {
    title: 'Secure Data Management',
    description: 'End-to-end encrypted health records with secure sharing capabilities.',
  },
  {
    title: 'Mobile Access',
    description: 'Access healthcare services anytime, anywhere through our mobile application.',
  },
]

const features = [
  'Automated health tracking',
  'Telemedicine integration',
  'Prescription management',
  'Appointment scheduling',
  'Medical history access',
  'Emergency alerts',
  'Lab results tracking',
  'Healthcare provider network',
]

export default function LearnMoreContent() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transform Healthcare Delivery
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            IntelliCare combines cutting-edge technology with healthcare expertise to deliver
            an innovative platform that benefits both patients and healthcare providers.
          </p>
        </div>

        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative">
              <dt>
                <CheckCircleIcon className="absolute h-6 w-6 text-primary-600" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{benefit.description}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Key Features
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <CheckCircleIcon className="h-5 w-5 text-primary-600 mb-2" aria-hidden="true" />
                <p className="text-sm text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/get-started"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  )
}