;(() => {
  //! Sin aplicar el principio de responsabilidad única

  type Gender = 'M' | 'F'

  interface PersonProps {
    birthdate: Date
    gender: Gender
    name: string
  }

  class Person {
    public birthdate: Date
    public gender: Gender
    public name: string

    constructor({ birthdate, gender, name }: PersonProps) {
      this.birthdate = birthdate
      this.gender = gender
      this.name = name
    }
  }

  interface UserProps extends PersonProps {
    email: string
    role: string
  }

  class User extends Person {
    private lastAccess: Date
    public email: string
    public role: string

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ birthdate, gender, name })

      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    isAuth() {
      return true
    }
  }

  interface UserSettingsProps extends UserProps {
    lastOpenFolder: string
    workingDirectory: string
  }

  class UserSettings extends User {
    public lastOpenFolder: string
    public workingDirectory: string

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birthdate, gender, name, email, role })
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

  const userSetting = new UserSettings({
    birthdate: new Date('1995-12-19'),
    email: 'ddominguez@test.com',
    gender: 'M',
    lastOpenFolder: 'Desktop',
    name: 'DiegoDom',
    role: 'admin',
    workingDirectory: 'Flogiv',
  })

  console.log({ userSetting, isAuth: userSetting.isAuth() })
})()
