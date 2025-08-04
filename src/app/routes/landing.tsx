import { useNavigate } from 'react-router';

import { Head } from '@/components/seo';
import { paths } from '@/config/paths';
import { ShopHomepage } from '@/features/shop/components';
import { useUser } from '@/lib/auth';

const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleSearch = (value: string) => {
    console.log('Search:', value);
    // TODO: Implement search functionality
  };

  const handleNavigationClick = (item: any) => {
    console.log('Navigation clicked:', item);
    // TODO: Implement navigation
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
    // TODO: Implement cart functionality
  };

  const handleProfileClick = () => {
    if (user.data) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  const handleShopNowClick = () => {
    console.log('Shop Now clicked');
    // TODO: Navigate to shop page
  };

  return (
    <>
      <Head description="SHOP.CO - Find clothes that match your style" />
      <ShopHomepage
        onSearch={handleSearch}
        onNavigationClick={handleNavigationClick}
        onCartClick={handleCartClick}
        onProfileClick={handleProfileClick}
        onShopNowClick={handleShopNowClick}
      />
    </>
  );
};

export default LandingRoute;
