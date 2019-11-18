import { Request, Response } from "express";
import  BookModel, {Book}  from '../models/book.model';

class BooksController {
  public async index(req: Request, res: Response) {
    const books:Book[] = await BookModel.find()
    res.render("books/index", { title: "Libros", books });
  }

  public renderFormBook(req: Request, res: Response): void {
    res.render("books/add", { title: "Agregar un libro" });
  }

  public async saveBook(req: Request, res: Response) {
      console.log(req.body);
      const{title, author, isbn} = req.body
      const book:Book =  new BookModel({title,author,isbn});
      await book.save();
      res.redirect('/books');
  }
}

export const booksController = new BooksController();
