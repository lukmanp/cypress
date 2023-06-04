/// <reference types="cypress" />

describe('YouTube Automation', () => {
    it('Searches and Plays a Video', () => {
      cy.visit('https://www.youtube.com');
  
      // Mengetikkan kata kunci pencarian di bidang pencarian
      cy.get('input[name="search_query"]').type('openai').type('{enter}');
  
      // Memilih video pertama dari hasil pencarian
      cy.get('a#video-title').first().click();
  
      // Memastikan video telah dimuat
      cy.get('video').should('be.visible');
  
      // Memainkan video
      cy.get('.ytp-play-button').click();
  
      // Menunggu 10 detik
      cy.wait(10000);
  
      // Menghentikan video
      cy.get('.ytp-play-button').click();
    });
  });
    