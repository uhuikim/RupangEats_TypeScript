import React, { useCallback, useState } from 'react';
import InfoForm from 'components/common/admin/InfoForm';

const ShopsRegister: React.FC = () => {
  const [info, setInfo] = useState({
    address: '',
    location: '',
    name: '',
    operatingTime: '',
    phone: '',
  });

  const handleChanges = useCallback((value) => {
    setInfo((prev) => ({
      ...prev,
      ...value,
    }));
  }, []);

  return <InfoForm {...info} onChanges={handleChanges} />;
};

export default ShopsRegister;
