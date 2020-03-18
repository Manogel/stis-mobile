import React, { useState } from 'react';

import * as Yup from 'yup';

import female from '~/assets/icons/female.png';
import male from '~/assets/icons/male.png';

import {
  Container,
  SubTitle,
  ContentForm,
  Input,
  InputMask,
  BoxSelectSex,
  SexOption,
  SexIcon,
  Divider,
} from './styles';

export default function Screen2({ navigation: { navigate } }) {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  async function handleSubmit(sex) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(100, 'Máximo 100 caracteres')
          .required('Seu nome é obrigatório'),
        birthdate: Yup.string()
          .datebr('Data inválida')
          .required('Sua data de nascimento é obrigatória'),
      });
      await schema.validate(
        { name, birthdate },
        {
          abortEarly: false,
        }
      );
      navigate('Home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        let errorMessages = '';
        err.inner.forEach(e => {
          errorMessages += `${e.message}\n`;
        });
        alert(errorMessages);
        return false;
      }
    }
  }

  return (
    <Container>
      <SubTitle>
        Nos ajude a selecionar informações para seu perfil. Isso vai nos ajudar
        a filtrar as informações ideais para você!
      </SubTitle>
      <ContentForm>
        <Input
          placeholder="Seu Nome"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />
        <InputMask
          placeholder="Data de nascimento no padrão DD/MM/AAAA"
          autoCapitalize="none"
          value={birthdate}
          onChangeText={text => setBirthdate(text)}
          type="datetime"
          options={{
            format: 'DD/MM/YYYY',
          }}
        />

        <BoxSelectSex>
          <SexOption onPress={() => handleSubmit(true)}>
            <SexIcon source={male} resizeMode="contain" />
          </SexOption>
          <Divider />
          <SexOption onPress={() => handleSubmit(false)}>
            <SexIcon source={female} resizeMode="contain" />
          </SexOption>
        </BoxSelectSex>
      </ContentForm>

      {/*  <Button>
        <ButtonText>Finalizar</ButtonText>
      </Button> */}
    </Container>
  );
}
