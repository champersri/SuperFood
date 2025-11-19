
import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';
import type { SubscriptionPlan } from '../types';

const SubscriptionCard: React.FC<{ plan: SubscriptionPlan }> = ({ plan }) => {
    const Icon = plan.icon;
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div className="mb-4 text-green-600">
                <Icon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-4 h-10">{plan.details}</p>
            
            {plan.mealsIncluded && plan.mealsIncluded.length > 0 && (
                <div className="mb-4 w-full">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                    <div className="flex flex-wrap justify-center gap-1">
                        {plan.mealsIncluded.map(meal => (
                            <span key={meal} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                                {meal}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-auto bg-green-50 text-green-800 font-bold text-lg px-6 py-2 rounded-full">
                {plan.priceRange}/mo
            </div>
        </div>
    )
}

const Subscriptions: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Flexible Subscription Plans</h2>
            <p className="text-center text-gray-500 mb-8">Commit to health. We'll handle the rest.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SUBSCRIPTION_PLANS.map(plan => <SubscriptionCard key={plan.id} plan={plan}/>)}
            </div>
        </div>
    )
}

export default Subscriptions;
