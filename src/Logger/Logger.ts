import chalk from 'chalk';

type loggerColors = 'red' | 'blue' | 'white' | 'green';

export class Logger {
  private logger: (message: string) => void = console.log;
  private className: string;
  private timestamp: boolean;

  constructor(className: string, timestamp: boolean = false) {
    this.className = className;
    this.timestamp = timestamp;
  }

  public log(...messages: string[]) {
    this.innerLogger(messages)('green', 'LOG');
  }

  public error(...messages: string[]) {
    this.innerLogger(messages)('red', 'ERROR');
  }

  public info(...messages: string[]) {
    this.innerLogger(messages)('blue', 'INFO');
  }

  public debug(...messages: string[]) {
    this.innerLogger(messages)('white', 'DEBUG');
  }

  private getTime(): string {
    return new Date().toLocaleTimeString().split(' ')[0];
  }

  private innerLogger(messages: string[]) {
    return (color: loggerColors, functionName: string) => {
      let log: string = '';

      if (this.timestamp)
        log += chalk.gray(`${this.getTime()} `);

      log += chalk.white(`[${chalk[color](functionName)}]:`);

      messages.forEach((message: string) => {
        log += ' ' + message;
      });

      log += chalk.white(' - ' + chalk[color](this.className));
      this.logger(chalk[color](log));
    };
  }
}