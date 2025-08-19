# Guia de Instalação

## Requisitos mínimos

Para configurar um ambiente de desenvolvimento mobile com **React Native**, é necessário instalar:

1. [Node.js](https://nodejs.org/pt/download)
2. [JDK 17 (Java Development Kit)](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
3. [Android Studio](https://developer.android.com/studio) (inclui o SDK do Android e ferramentas auxiliares)
4. [ADB](#instalação-do-adb)

---

## Configuração do ambiente

Após instalar os programas acima, configure as variáveis de ambiente:

### Variáveis de ambiente

- **JAVA_HOME** → caminho de instalação do JDK
  Exemplo no Windows:

  ```
  C:\Program Files\Java\jdk-17
  ```

- **ANDROID_HOME** → caminho do SDK do Android (instalado junto ao Android Studio)
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

### Instalação do ADB

O **ADB (Android Debug Bridge)** é uma ferramenta de linha de comando que permite se comunicar com dispositivos Android conectados ao computador (emuladores ou físicos). Ele já vem junto com o Android Studio, mas também pode ser instalado separadamente.

### Opção 1 – Usando o Android Studio (recomendado)

1. Abra o **Android Studio**.
2. Vá em **SDK Manager** (`File > Settings > Appearance & Behavior > System Settings > Android SDK`).
3. Na aba **SDK Tools**, marque a opção **Android SDK Platform-Tools**.
4. Clique em **Apply** para instalar.

O ADB será instalado dentro da pasta do SDK, normalmente em:

```
C:\Users\SEU_USUARIO\AppData\Local\Android\Sdk\platform-tools
```

### Opção 2 – Instalação manual (sem Android Studio)

1. Baixe o pacote oficial **Platform Tools** do site da Google:
   [Download ADB](https://developer.android.com/studio/releases/platform-tools)

2. Extraia o arquivo em um diretório, por exemplo:

   ```
   C:\adb
   ```

3. Adicione esse diretório no **Path** do Windows (como mostrado anteriormente).

> \[!WARNING]
> Após configurar, reinicie o terminal (ou o computador) para que as variáveis sejam aplicadas.
> Você pode testar a instalação rodando:
>
> ```bash
> java -version
> node -v
> adb --version
> ```
