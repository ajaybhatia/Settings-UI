import React from 'react';
import { Card, CardItem, Text, List } from 'native-base';


const CusCard = ({ title, children }) => (
  <Card>
    <CardItem header>
      <Text style={{ color: 'teal', fontSize: 14.5 }}>{title}</Text>
    </CardItem>
    <List>
      {children}
    </List>
  </Card>
);

export default CusCard;
