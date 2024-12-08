<<<<<<< HEAD
import Card from "../components/Elements/Card"
import MainLayout from "../components/Layouts/MainLayout";
=======
import Card from "components/Elements/Card";
import MainLayout from "components/Layout/MainLayout";
>>>>>>> f6b0764778b792a0a4546ffff5908d15305072aa

const ExpensePage = () => {
  return (
    <MainLayout type="expense">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-1 md:gap-x-6">
<<<<<<< HEAD
      <Card
=======
      <Card 
>>>>>>> f6b0764778b792a0a4546ffff5908d15305072aa
           title="Expenses Comparison"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        
        </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
           title="Expenses Breakdown"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" />
      </div>

           {/* top content end */}
           {/* bottom content start */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
<<<<<<< HEAD
           title="Expenses Breakdown"

=======
>>>>>>> f6b0764778b792a0a4546ffff5908d15305072aa
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        <Card 
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
      <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  )
}

export default ExpensePage