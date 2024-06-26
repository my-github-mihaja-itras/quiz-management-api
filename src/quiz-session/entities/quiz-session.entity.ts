import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

/**
 * result
 */
@Schema()
export class QuestionResult {
  @Prop({ type: String })
  userAnswer: string;

  @Prop({ type: Boolean })
  isValidAnswer?: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Question' })
  question: string | Types.ObjectId;

 
}

const questionResultSchema = SchemaFactory.createForClass(QuestionResult);

@Schema({ timestamps: true })
export class QuizSession {
  _id: string | Types.ObjectId;

  @Prop({ type: String, default: 0 })
  quizNumber: string;

  @Prop({ type: [questionResultSchema], required: false })
  quiz: QuestionResult[];
}

export type QuizSessionDocument = HydratedDocument<QuizSession>;

export const QuizSessionSchema = SchemaFactory.createForClass(QuizSession);
