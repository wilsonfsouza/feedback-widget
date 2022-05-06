# Backend
- App workflow
  - 1 route to communicate with frontend for every feedback submission
  - Backend will save feedback in DB and send email to the owner of the app the uses the feedback widget
- Initial setup
  - TS
  - ts-node-dev
  - Setup Express
- Prisma setup
- Route for feeback
- Email Service -> mailtrap
- SOLID Principles
  1. Single Responsability Principle(*): each class/function has a unique responsibility.
  2. Open/Closed Principle: classes in an app must be open for extension but closed to modification (immutability).
  3. Liskov Substitution Principle(*): we should be able to replace a parent class with an inherited class, and everything should remain the same. The inherited classes must completely incorporate the parent class.
  4. Interface Segregation Principle: class Impressora implements Imprimir, Scannear, Digitalizar (we should try to break interfaces as much as we can) instead of class Impressora implements MegaImpressora
  5. Dependency Inversion Principle(*): instead of a class search for external dependencies, its internal context must say what to use. Makes app more testable. It separates the logic from external tools.
- Using SOLID in the application
- Setting up jest
- Unit tests in the application
