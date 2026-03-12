import {ListView} from '@/components/refine-ui/views/list-view.tsx';
import {Breadcrumb} from '@/components/refine-ui/layout/breadcrumb.tsx';


const SubjectsCreate = () => {
  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page-title">Create Subject</h1>
    </ListView>
  )
}
export default SubjectsCreate
