import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Div, Flex } from 'components/common/Box';
import { Input } from 'components/common/Input';

export interface PropTypes {
  name: string;
  address: string;
  location: string;
  phone: string;
  operatingTime: string;
  onChanges: (value: Partial<Omit<PropTypes, 'onChanges'>>) => void;
}

const InfoForm = ({ address, location, name, operatingTime, phone, onChanges }: PropTypes) => {
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ name: e.target.value });
    },
    [onChanges]
  );

  const handleAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ address: e.target.value });
    },
    [onChanges]
  );

  const handleLocationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ location: e.target.value });
    },
    [onChanges]
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ phone: e.target.value });
    },
    [onChanges]
  );

  const handleOperatingTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChanges({ operatingTime: e.target.value });
    },
    [onChanges]
  );
  return (
    <Border>
      <Flex>
        <Div flex='1'>이름</Div>
        <Div flex='3'>
          <Input value={name ? name : ''} onChange={handleNameChange} placeholder='string' />
        </Div>
      </Flex>
      <Flex>
        <Div flex='1'>주소</Div>
        <Div flex='3'>
          <Input value={address ? address : ''} onChange={handleAddressChange} placeholder='string' />
        </Div>
      </Flex>
      <Flex>
        <Div flex='1'>상세주소</Div>
        <Div flex='3'>
          <Input value={location ? location : ''} onChange={handleLocationChange} placeholder='string' />
        </Div>
      </Flex>
      <Flex>
        <Div flex='1'>전화번호</Div>
        <Div flex='3'>
          <Input value={phone ? phone : ''} onChange={handlePhoneChange} placeholder='string' />
        </Div>
      </Flex>
      <Flex>
        <Div flex='1'>운영시간</Div>
        <Div flex='3'>
          <Input value={operatingTime ? operatingTime : ''} onChange={handleOperatingTimeChange} placeholder='number' />
        </Div>
      </Flex>
    </Border>
  );
};

export default InfoForm;

const Border = styled.div`
  border-top: 1px solid black;
  border-left: 1px solid black;
  background-color: white;
  & > div > div {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    line-height: 2rem;
    padding: 0.5rem;
  }
`;
