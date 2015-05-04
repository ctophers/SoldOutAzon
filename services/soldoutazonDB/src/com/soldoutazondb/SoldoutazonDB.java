
package com.soldoutazondb;

import java.util.List;
import com.soldoutazondb.data.output.GetCategoryRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "soldoutazonDB"
 *  04/29/2015 19:10:07
 * 
 */
@SuppressWarnings("unchecked")
public class SoldoutazonDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetCategoryRtnType> getCategory(PagingOptions pagingOptions) {
        return ((List<GetCategoryRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getCategoryQueryName), pagingOptions));
    }

    public com.soldoutazondb.data.Config getConfigById(String id, PagingOptions pagingOptions) {
        List<com.soldoutazondb.data.Config> rtn = ((List<com.soldoutazondb.data.Config> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getConfigByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.soldoutazondb.data.Product> getProducts(String name, Integer rank, String category, PagingOptions pagingOptions) {
        return ((List<com.soldoutazondb.data.Product> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getProductsQueryName), name, rank, category, pagingOptions));
    }

    public List<com.soldoutazondb.data.Node> getNodesByCategoryName(String category, PagingOptions pagingOptions) {
        return ((List<com.soldoutazondb.data.Node> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getNodesByCategoryNameQueryName), category, pagingOptions));
    }

    public Integer updatePassword(Integer id, String password, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.updatePasswordQueryName), id, password, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.soldoutazondb.data.output.GetProductsCountRtnType getProductsCount(String name, Integer rank, String category, PagingOptions pagingOptions) {
        List<com.soldoutazondb.data.output.GetProductsCountRtnType> rtn = ((List<com.soldoutazondb.data.output.GetProductsCountRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getProductsCountQueryName), name, rank, category, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.soldoutazondb.data.Node getNodeById(Integer id, PagingOptions pagingOptions) {
        List<com.soldoutazondb.data.Node> rtn = ((List<com.soldoutazondb.data.Node> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getNodeByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.soldoutazondb.data.Product> getAllProducts(PagingOptions pagingOptions) {
        return ((List<com.soldoutazondb.data.Product> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.getAllProductsQueryName), pagingOptions));
    }

    public Integer updateUsername(String username, Integer id, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.updateUsernameQueryName), username, id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateTimestamp(Integer id, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (SoldoutazonDBConstants.updateTimestampQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
