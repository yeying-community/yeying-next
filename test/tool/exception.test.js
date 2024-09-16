
function success() {
  console.log('success0');
}

function failure1() {
  throw new Error('failure')
}

function failure2() {
  return new Promise((resolve) => {
    failure1()
    resolve()
  })
}

function func1() {
  return new Promise(async (resolve, reject) => {
    success()
    resolve()
  })
}

function func2() {
  return new Promise(async (resolve, reject) => {
    try {
      failure1()
      console.log('func2')
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

function func3() {
  return new Promise((resolve) => {
    failure1()
    resolve()
  })
}

function func4() {
  return new Promise((resolve) => {
    failure2().then(() => resolve()).catch(e => console.error('fun4 exception', e))
    resolve()
  })
}

function func5() {
  return new Promise((resolve, reject) => {
    failure2().then(() => resolve()).catch(e => reject(e))
  })
}

describe('Exception', () => {
  it('reject1', () => {
    func1().then(() => console.log('success1')).catch(e => console.error('failure1', e))
    func2().then(() => console.log('1 success2')).catch(e => console.error('2 failure2', e)).then(() => console.log('2 success2'))
    func3().then(() => console.log('success3')).catch(e => console.error('2 failure3', e))
    func4().then(() => console.log('success4')).catch(e => console.error('failure4', e))
    func5().then(() => console.log('success5')).catch(e => console.error('failure5', e))
  })
})