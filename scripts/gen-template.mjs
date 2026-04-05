/**
 * Генератор шаблона quiz-template.docx
 * Запуск: node scripts/gen-template.mjs
 *
 * Формат документа Word (распознаётся парсером):
 *
 * QUIZ: Название теста
 * DESCRIPTION: Описание
 * PASSING_SCORE: 70
 *
 * 1. Текст вопроса с одним правильным ответом?
 * A) Вариант А
 * B) Вариант Б*         ← звёздочка = правильный ответ
 * C) Вариант В
 * NOTE: Пояснение (необязательно)
 *
 * 2. [MULTIPLE] Вопрос с несколькими правильными?
 * A) Правильный 1*
 * B) Неправильный
 * C) Правильный 2*
 *
 * 3. [TEXT] Вопрос с текстовым ответом?
 * ANSWER: ответ1 | ответ2
 */

import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx'
import { writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/static')
mkdirSync(outDir, { recursive: true })

// ── helpers ──────────────────────────────────────────────────
const h = (text, level = HeadingLevel.HEADING_2) =>
  new Paragraph({ heading: level, children: [new TextRun({ text, bold: true })] })

const p = (text, opts = {}) =>
  new Paragraph({ children: [new TextRun({ text, ...opts })] })

const bold = (text) =>
  new Paragraph({ children: [new TextRun({ text, bold: true })] })

const gray = (text) =>
  new Paragraph({ children: [new TextRun({ text, color: '888888', italics: true, size: 20 })] })

const spacer = () => new Paragraph({ children: [new TextRun('')] })

const divider = () => new Paragraph({
  border: { bottom: { color: 'CCCCCC', space: 1, style: BorderStyle.SINGLE, size: 6 } },
  children: [],
})

// ── Содержимое документа ─────────────────────────────────────
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: 'Calibri', size: 24 },
      },
    },
  },
  sections: [{
    children: [
      // ── Заголовок ──
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'QuizMaster — Шаблон вопросов', bold: true, size: 36 })],
      }),
      spacer(),
      gray('Заполните этот файл своими вопросами и загрузите в QuizMaster.'),
      gray('Правила форматирования описаны ниже. Удалите лишние примеры перед загрузкой.'),
      spacer(),
      divider(),

      // ── Настройки квиза ──
      spacer(),
      h('⚙️ Настройки квиза (необязательно)', HeadingLevel.HEADING_2),
      p('QUIZ: Название вашего теста', { bold: true }),
      p('DESCRIPTION: Краткое описание теста'),
      p('PASSING_SCORE: 60'),
      spacer(),
      gray('QUIZ, DESCRIPTION, PASSING_SCORE — необязательные поля. Если не указать, будут применены настройки по умолчанию.'),
      spacer(),
      divider(),

      // ── Правила ──
      spacer(),
      h('📋 Правила форматирования вопросов', HeadingLevel.HEADING_2),
      spacer(),

      bold('Одиночный выбор (по умолчанию):'),
      p('  1. Текст вопроса?'),
      p('  A) Вариант А'),
      p('  B) Вариант Б*     ← звёздочка * после варианта = правильный ответ'),
      p('  C) Вариант В'),
      p('  NOTE: Пояснение к ответу (необязательно)'),
      spacer(),

      bold('Несколько правильных ответов:'),
      p('  2. [MULTIPLE] Текст вопроса с несколькими ответами?'),
      p('  A) Правильный вариант*'),
      p('  B) Неправильный вариант'),
      p('  C) Тоже правильный*'),
      spacer(),

      bold('Текстовый ответ:'),
      p('  3. [TEXT] Как называется этот процесс?'),
      p('  ANSWER: ответ1 | ответ2 | синоним'),
      gray('  Допустимые ответы через символ | (регистр не важен)'),
      spacer(),

      bold('Важно:'),
      p('  • Нумерация вопросов — число с точкой: 1. 2. 3.'),
      p('  • Варианты ответов — буква со скобкой: A) B) C) D)  или  a) b) c)'),
      p('  • Правильный ответ помечается * сразу после текста варианта'),
      p('  • Между вопросами можно оставлять пустую строку'),
      spacer(),
      divider(),

      // ── Примеры вопросов ──
      spacer(),
      h('✏️ Примеры вопросов (замените своими!)', HeadingLevel.HEADING_2),
      spacer(),
      p('QUIZ: Общие знания — пример'),
      p('DESCRIPTION: Демонстрационный набор вопросов'),
      p('PASSING_SCORE: 70'),
      spacer(),

      p('1. Какой язык программирования создан в Sun Microsystems в 1995 году?'),
      p('A) Python'),
      p('B) Java*'),
      p('C) C++'),
      p('D) Ruby'),
      p('NOTE: Java разработан Джеймсом Гослингом и выпущен в 1995 году.'),
      spacer(),

      p('2. [MULTIPLE] Какие из этих языков являются языками разметки?'),
      p('A) HTML*'),
      p('B) JavaScript'),
      p('C) XML*'),
      p('D) CSS'),
      p('E) Markdown*'),
      spacer(),

      p('3. Какая планета Солнечной системы самая большая?'),
      p('A) Сатурн'),
      p('B) Юпитер*'),
      p('C) Уран'),
      p('D) Нептун'),
      spacer(),

      p('4. [TEXT] Как называется самый распространённый газ в атмосфере Земли?'),
      p('ANSWER: азот | nitrogen | n2'),
      p('NOTE: Азот (N₂) составляет около 78% атмосферы Земли.'),
      spacer(),

      p('5. В каком году основана компания Apple?'),
      p('A) 1972'),
      p('B) 1976*'),
      p('C) 1980'),
      p('D) 1984'),
      spacer(),
      divider(),
      spacer(),
      gray('Файл создан QuizMaster · quizmaster.app'),
    ],
  }],
})

// ── Сохраняем ─────────────────────────────────────────────────
const buffer = await Packer.toBuffer(doc)
const outPath = join(outDir, 'quiz-template.docx')
writeFileSync(outPath, buffer)
console.log('✅ Шаблон создан:', outPath, '(' + Math.round(buffer.length / 1024) + ' КБ)')
