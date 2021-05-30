import {
    GlobeAltIcon,
    LightningBoltIcon,
    ScaleIcon,
    BadgeCheckIcon,
} from '@heroicons/react/outline';

const features = [
    {
        name: 'Delicious Coffee',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BadgeCheckIcon,
    },
    {
        name: 'Accessible anywhere',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Eco-friendly',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
];

export const Features: React.FC = () => {
    return (
        <div className='font-serif'>
            <div className='bg-white'>
                <div className='max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <p className='mt-1 text-3xl text-gray-900 sm:text-2xl sm:tracking-tight lg:text-6xl'>
                            You're coffee is around the corner
                        </p>
                    </div>
                </div>
            </div>
            <div className='py-5 bg-white'>
                <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <h2 className='sr-only'>A better way to send money.</h2>
                    <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 justify-center'>
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt>
                                    <div className='justify-center items-center flex'>
                                        <div className='flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white'>
                                            <feature.icon
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        </div>
                                    </div>
                                    <p className='mt-5 text-lg leading-6 font-medium text-gray-900 text-center'>
                                        {feature.name}
                                    </p>
                                </dt>
                                <dd className='mt-2 text-base text-gray-500 text-center'>
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};
