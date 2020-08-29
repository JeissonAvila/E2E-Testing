module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    // Aquí podemos introducir los argumentos que normalmente irían en la función launch()
    slowMo: 380
  },
  browser: 'chromium',
  browserContext: 'default',
}