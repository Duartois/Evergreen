import BannerWarning from '@/components/banner-warning';
import PricingCard from '@/components/pricing-card';

export default async function MonthlyBook() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-secondary">Book of the month</h1>
      <BannerWarning text="To access the book of the month, you need an active subscription. Would you like to subscribe now?" />
      <PricingCard />
    </>
  );
}
