const stats = [
  { id: 1, name: 'User Satisfaction', value: '95%' },
  { id: 2, name: 'Faster Diagnosis', value: '70%' },
  { id: 3, name: 'Cost Reduction', value: '40%' },
  { id: 4, name: 'Efficiency Increase', value: '60%' },
]

export default function Stats() {
  return (
    <div className="bg-primary-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by healthcare providers worldwide
          </h2>
          <p className="mt-3 text-xl text-primary-200 sm:mt-4">
            Our platform delivers measurable results across all healthcare metrics
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}