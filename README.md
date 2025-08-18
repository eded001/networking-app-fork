# Networking App (sem nome)

Aplicativo de networking voltado para **eventos e interações sociais**.

Se quiser instalar ou configurar seu ambiente de desenvolvimento, acesse:
[Guia de Instalação](./INSTALLATION.md)

---

## Inicialização do Projeto

> \[!IMPORTANT]
> Antes de começar, certifique-se de estar na pasta **`app`**.

### Instalar dependências

```bash
npm install
```

### Iniciar o servidor Metro

```bash
npm start
```

### Executar o app

> \[!NOTE]
> É necessário ter um dispositivo físico conectado **ou** o emulador configurado e rodando.

**Android:**

```bash
npx react-native run-android
```

**iOS:**

```bash
npx react-native run-ios
```

---

## Observações

* **iOS**

  * Requer um **Mac com Xcode instalado**.
  * Se usar CocoaPods, rode `cd ios && pod install` antes do build.

* **Android**

  * Verifique se a variável **`ANDROID_HOME`** está configurada.
  * Confirme se o **emulador** está aberto ou se o **dispositivo físico** está autorizado via `adb devices`.
