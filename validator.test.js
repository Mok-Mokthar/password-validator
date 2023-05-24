import validator from './validator';
import { it, expect } from "vitest";
/**
* @vitest-environment jsdom
*/

describe("Password Validator", () => {
  beforeEach(() => {

    document.body.innerHTML = `
      <div class="container">
        <form id="passwordForm">
          <input type="password" id="password" name="password" value="" required>
        </form>
        <div id="messageContainer">
          <p id="title"></p>
          <p id="title2"></p>
          <p id="title3"></p>
          <p id="title4"></p>
        </div>
      </div>
    `;
    validator();
  });

  it("should display an error message if password length is less than 8 characters", () => {
    document.getElementById('password').value = "1234567";
    document.getElementById('passwordForm').dispatchEvent(new Event('submit'));
    expect(document.getElementById('title').textContent).toBe("Le mot de passe doit comporter au moins 8 caractères");
  });

  it("should display an error message if password contains less than 2 digits", () => {
    document.getElementById('password').value = "iuhefzZ";
    document.getElementById('passwordForm').dispatchEvent(new Event('submit'));
    expect(document.getElementById('title2').textContent).toBe("Le mot de passe doit contenir au moins 2 chiffres");
  });

  it("should display an error message if password does not contain an uppercase letter", () => {
    document.getElementById('password').value = "Ghcdefg12";
    document.getElementById('passwordForm').dispatchEvent(new Event('submit'));
    expect(document.getElementById('title3').textContent).toBe("Le mot de passe doit contenir au moins une lettre majuscule");
  });

  it("should display an error message if password does not contain a special character", () => {
    document.getElementById('password').value = "Kfcdefg12";
    document.getElementById('passwordForm').dispatchEvent(new Event('submit'));
    expect(document.getElementById('title4').textContent).toBe("Le mot de passe doit contenir au moins un caractère spécial");
  });

  it("should not display any error message if password passes all tests", () => {
    document.getElementById('password').value = "Vbbdefg12!";
    document.getElementById('passwordForm').dispatchEvent(new Event('submit'));
    expect(document.getElementById('title').textContent).toBe("");
    expect(document.getElementById('title2').textContent).toBe("");
    expect(document.getElementById('title3').textContent).toBe("");
    expect(document.getElementById('title4').textContent).toBe("");
  });
});