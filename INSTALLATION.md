# Guia de Instalação

## Requisitos mínimos

Para configurar um ambiente de desenvolvimento mobile com **React Native**, é necessário instalar:

1. [Node.js](https://nodejs.org/pt/download)
2. [JDK 17 (Java Development Kit)](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
3. [Android Studio](https://developer.android.com/studio) (inclui o SDK do Android e ferramentas auxiliares)

---

## Configuração do ambiente

Após instalar os programas acima, configure as variáveis de ambiente:

### Variáveis de ambiente

* **JAVA\_HOME** → caminho de instalação do JDK
  Exemplo no Windows:

  ```
  C:\Program Files\Java\jdk-17
  ```

* **ANDROID\_HOME** → caminho do SDK do Android (instalado junto ao Android Studio)
  Exemplo no Windows:

  ```
  C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk
  ```

### Path (Windows)

Dentro da variável `Path`, adicione as seguintes entradas:

```
%JAVA_HOME%\bin
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

> ⚠️ **Atenção**:
> Após configurar, reinicie o terminal (ou o computador) para que as variáveis sejam aplicadas.
> Você pode testar a instalação rodando:
>
> ```bash
> java -version
> node -v
> adb --version
> ```