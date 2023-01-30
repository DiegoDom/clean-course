;(() => {
  //! Sin aplicar el principio de responsabilidad única

  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public birthdate: Date,
      public gender: Gender,
      public name: string,
    ) {}
  }

  class User extends Person {
    private lastAccess: Date

    constructor(
      birthdate: Date,
      gender: Gender,
      name: string,
      public email: string,
      public role: string,
    ) {
      super(birthdate, gender, name)
      this.lastAccess = new Date()
    }

    isAuth() {
      return true
    }
  }

  class UserSettings extends User {
    constructor(
      birthdate: Date,
      email: string,
      gender: Gender,
      name: string,
      role: string,
      public lastOpenFolder: string,
      public workingDirectory: string,
    ) {
      super(birthdate, gender, name, email, role)
    }
  }

  const userSetting = new UserSettings(
    new Date('1995-12-19'),
    'ddominguez@test.com',
    'M',
    'DiegoDom',
    'admin',
    'Desktop',
    'Flogiv',
  )

  console.log({ userSetting, isAuth: userSetting.isAuth() })
})()
