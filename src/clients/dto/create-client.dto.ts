import { IsEmail, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @Length(2, 120, { message: 'O nome deve ter entre 2 e 120 caracteres.' })
  name: string;

@IsString()
@Length(8, 16, { message: 'A senha deve ter entre 8 e 16 caracteres.' })
@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
  message:
    'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
})
password: string;

  @IsOptional()
  @IsString()
  // Regex simples pra aceitar CPF ou CNPJ com ou sem pontuação
  @Matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$|^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/, {
    message: 'O documento deve ser um CPF ou CNPJ válido (ex: 000.000.000-00 ou 00.000.000/0000-00).',
  })
  document?: string;

  @IsOptional()
  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  @IsOptional()
  @IsString()
  @Matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, {
    message: 'O telefone deve ser válido (ex: (85) 99999-9999).',
  })
  phone?: string;

}
