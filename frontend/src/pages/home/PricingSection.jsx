import { useState } from 'react';
import { AppLink, Button, Card, CheckList } from '../../components/ui';
import { pricingPlan } from '../../data';

export function PricingSection() {
  const [expandedPlans, setExpandedPlans] = useState({});
  const plans = [
    {
      name: 'Free',
      description: 'For individuals getting started.',
      price: '0',
      features: pricingPlan.features.slice(0, 7),
      extras: pricingPlan.extras.slice(0, 4),
    },
    {
      name: 'Pro',
      description: 'For creators and growing businesses.',
      price: '19',
      features: [
        'Unlimited biolink pages',
        'Unlimited shortened links',
        '10 static sites',
        '50 QR codes',
        '90 days stats retention',
      ],
      extras: [
        'Custom domains',
        'Advanced targeting',
        'Password protection',
        'Links scheduling & limiter',
      ],
      featured: true,
    },
    {
      name: 'Business',
      description: 'For teams and multiple brands.',
      price: '49',
      features: [
        'Everything in Pro',
        'Unlimited static sites',
        'Unlimited QR codes',
        'Unlimited pixels',
        '365 days stats retention',
      ],
      extras: [
        'Custom branding',
        'Advanced targeting',
        'Custom CSS and JS',
        'Priority support',
      ],
    },
  ];

  const togglePlan = (name) => {
    setExpandedPlans((current) => ({ ...current, [name]: !current[name] }));
  };

  return (
    <section className="band pricing-section" id="pricing">
      <div className="pricing-section__heading">
        <p className="pricing-section__eyebrow">PLANS &amp; PRICING</p>
        <h2>Simple, transparent pricing.</h2>
        <p className="muted">Choose the plan that fits your workflow. Upgrade when your business grows.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => {
          const isExpanded = expandedPlans[plan.name];
          const items = isExpanded ? [...plan.features, ...plan.extras] : plan.features;

          return (
            <Card key={plan.name} className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
              {plan.featured ? <span className="pricing-card__badge">Most popular</span> : null}
              <div className="pricing-card__header">
                <h3>{plan.name}</h3>
                <p className="muted">{plan.description}</p>
              </div>
              <div className="price">
                <span>$</span>
                <strong>{plan.price}</strong>
                <small>/month</small>
              </div>
              <CheckList items={items} />
              <Button variant="ghost" onClick={() => togglePlan(plan.name)} className="pricing-card__toggle">
                {isExpanded ? 'View less features' : 'View all features'}
              </Button>
              <AppLink to="/register" className="btn btn--primary pricing-card__cta">
                Choose plan
              </AppLink>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

