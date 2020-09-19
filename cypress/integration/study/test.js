describe('My First Test', function() {
  　　it('Visit Google', function() {
   　　// googleを開く
    cy.visit('https://www.google.com/')
    // 検索ウィンドウに MSeeeeN と入力する
    cy.get("input[name='q']")
    　　.type('apple').should('have.value', 'apple')
    // Google 検索ボタンを押下する
    cy.contains('Google 検索')
    　　.click()
    // DOMのtitleタグが MSeeeeN - Google 検索 であることを確認する
    cy.title().should('eq', 'apple - Google 検索')
  　　})
  })