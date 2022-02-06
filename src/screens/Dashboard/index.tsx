import React from 'react'

import { 
  Container, 
  Header, 
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserName, 
  UserWrapper, 
  Icon, 
  HighlightCards, 
  Transactions, 
  Title, 
  TransactionsList 
} from './styles'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
  id : string
}

export function Dashboard() {
  const data : DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00', 
      category: { 
        name: 'Vendas', 
        icon: 'dollar-sign' 
      }, 
      date: '13/04/2021'
    },
    {
      id: '2',
      type: 'outcome',
      title: 'Mercado',
      amount: 'R$ 867,56', 
      category: { 
        name: 'Alimentação', 
        icon: 'coffee' 
      }, 
      date: '13/04/2021'
    },
    {
      id: '3',
      type: 'outcome',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.700,00', 
      category: { 
        name: 'Casa', 
        icon: 'shopping-bag' 
      }, 
      date: '13/04/2021'
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/79108633?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Kayque</UserName>
            </User>
          </UserInfo>

          <Icon name="logout" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type='income' title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada em dia 13 de abril' />
        <HighlightCard type='outcome' title='Saídas' amount='R$ 1.259,00' lastTransaction='Última saída em dia 03 de abril' />
        <HighlightCard type='total' title='Total' amount='R$ 16.141,00' lastTransaction='01 à 16 de abril' />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList 
          data={ data } 
          keyExtractor={ item => item.id }
          renderItem={ ({ item }) => <TransactionCard data={ item } /> } 
        />

      </Transactions>
    </Container>
  )
}